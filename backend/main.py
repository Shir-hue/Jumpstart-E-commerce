import os
import json
from datetime import datetime
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Jumpstart E-commerce AI Backend",
    description="AI-powered product description generation using Google Gemini",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Gemini client
gemini_model = None
api_key = os.getenv("GEMINI_API_KEY")
print(f"🔍 Debug: API Key present: {bool(api_key)}, Length: {len(api_key) if api_key else 0}")
if api_key:
    try:
        genai.configure(api_key=api_key)
        gemini_model = genai.GenerativeModel('gemini-1.5-flash')
        AI_ENABLED = True
        print("✅ Gemini AI initialized successfully!")
    except Exception as e:
        print(f"❌ Failed to initialize Gemini: {e}")
        AI_ENABLED = False
else:
    print("⚠️ No GEMINI_API_KEY found in environment")
    AI_ENABLED = False

# Pydantic models
class ProductFeatures(BaseModel):
    name: str
    category: str
    brand: str
    price: float
    features: List[str]
    target_audience: Optional[str] = "general"

class DescriptionRequest(BaseModel):
    product: ProductFeatures
    style: Optional[str] = "professional"  # professional, casual, luxury, technical
    length: Optional[str] = "medium"  # short, medium, long

class DescriptionResponse(BaseModel):
    success: bool
    description: str
    generated_at: str
    method: str  # "ai" or "template"
    word_count: int

@app.get("/")
async def root():
    return {"message": "🚀 Jumpstart AI Backend with Gemini is running!", "status": "healthy"}

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "ai_enabled": AI_ENABLED,
        "ai_provider": "Google Gemini" if AI_ENABLED else "None",
        "version": "1.0.0"
    }

@app.post("/api/generate-description", response_model=DescriptionResponse)
async def generate_product_description(request: DescriptionRequest):
    try:
        print(f"Request received for: {request.product.name} by {request.product.brand}")
        
        if gemini_model:
            try:
                description = generate_gemini_description(request)  
                print(f"✅ AI generation successful: {len(description)} chars")
                return DescriptionResponse(
                    success=True,
                    description=description,
                    generated_at=datetime.now().isoformat(),
                    method="ai",
                    word_count=len(description.split())
                )
            except Exception as ai_error:
                print(f"❌ Gemini AI generation failed: {ai_error}")
                print("🔄 Falling back to template generation...")
                # Fall back to template generation
                pass
        else:
            print("⚠️ No Gemini model available, using template")
        
        # Template-based generation (fallback)
        description = generate_template_description(request.product, request.style)
        print(f"📝 Template generation: {len(description)} chars")
        
        return DescriptionResponse(
            success=True,
            description=description,
            generated_at=datetime.now().isoformat(),
            method="template",
            word_count=len(description.split())
        )
        
    except Exception as e:
        print(f"💥 Critical error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to generate description: {str(e)}")

def generate_gemini_description(request: DescriptionRequest) -> str:
    """Generate product description using Google Gemini (synchronous)"""
    
    # Create a detailed prompt based on the product information
    prompt = create_ai_prompt(request.product, request.style, request.length)
    
    try:
        print(f"Attempting Gemini generation for: {request.product.name}")
        
        # Use synchronous generation with timeout-like safety
        response = gemini_model.generate_content(
            prompt,
            safety_settings=[
                {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_NONE"},
                {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE"}
            ],
            generation_config={
                "temperature": 1.0,  
                "max_output_tokens": 120, 
                "top_p": 0.95,
                "top_k": 50
            }
        )
        
        if hasattr(response, 'text') and response.text:
            print(f"Gemini success: {len(response.text)} chars")
            return response.text.strip()
        else:
            raise Exception("No text generated by Gemini")
        
    except Exception as e:
        print(f"Gemini error: {str(e)}")
        raise Exception(f"Gemini API error: {str(e)}")

def create_ai_prompt(product: ProductFeatures, style: str, length: str) -> str:
    """Create a prompt for short, practical product descriptions like Amazon/Lazada"""
    
    import random
    
    # Add variety with different prompt styles
    prompt_styles = [
        f"Write a concise product description for the {product.name} by {product.brand}. Price: ${product.price}. Key features: {', '.join(product.features)}. Keep it under 40 words, focus on practical details customers need.",
        
        f"Create a short Amazon-style description for: {product.brand} {product.name} (${product.price}). Features: {', '.join(product.features)}. Write 30-40 words highlighting what makes this {product.category} worth buying.",
        
        f"Product listing needed: {product.name} from {product.brand}, ${product.price}. Has {', '.join(product.features)}. Write a brief, factual description (35 words max) like you'd see on an e-commerce site.",
        
        f"Describe this {product.category}: {product.brand} {product.name}. Key specs: {', '.join(product.features)}. Price: ${product.price}. Write a short, practical description focusing on what customers care about most."
    ]
    
    # Randomly select a prompt style for variety
    selected_prompt = random.choice(prompt_styles)
    
    return selected_prompt

def generate_template_description(product: ProductFeatures, style: str) -> str:
    """Generate unique, varied descriptions for each category with randomization (fallback when AI is not available)"""
    
    import random
    
    # Multiple template variations for each category
    templates_by_category = {
        "shoes": [
            f"{product.brand} {product.name} - {' & '.join(product.features[:2])}. Great for running, walking, or casual outings. Now ${product.price}.",
            f"Step up your style with {product.brand} {product.name}. Features {', '.join(product.features[:2]).lower()}. Perfect for everyday wear. ${product.price}.",
            f"Comfortable {product.name} by {product.brand}. Built with {' and '.join(product.features[:2]).lower()}. All-day comfort guaranteed. Only ${product.price}.",
            f"{product.brand} {product.name} combines {' with '.join(product.features[:2]).lower()}. Ideal for active lifestyles. Special price: ${product.price}."
        ],
        
        "shirts": [
            f"Premium {product.brand} {product.name} with {', '.join(product.features[:2]).lower()}. Machine washable. Size range available. Price: ${product.price}.",
            f"Stylish {product.name} from {product.brand}. {' and '.join(product.features[:2])}. Easy care fabric. Get yours for ${product.price}.",
            f"{product.brand} {product.name} - {', '.join(product.features[:2]).lower()} design. Professional yet comfortable. Now ${product.price}.",
            f"Upgrade your wardrobe with {product.brand} {product.name}. Features {' plus '.join(product.features[:2]).lower()}. ${product.price} with fast shipping."
        ],
        
        "dresses": [
            f"Elegant {product.name} by {product.brand}. {' and '.join(product.features[:2])}. Perfect for work or weekend events. ${product.price} with free shipping.",
            f"{product.brand} {product.name} - {', '.join(product.features[:2]).lower()}. Versatile style for any occasion. Special offer: ${product.price}.",
            f"Beautiful {product.name} from {product.brand}. {' with '.join(product.features[:2]).lower()}. Effortlessly chic. Only ${product.price}.",
            f"Turn heads in {product.brand} {product.name}. Featuring {' and '.join(product.features[:2]).lower()}. Perfect fit guaranteed. ${product.price}."
        ],
        
        "pants": [
            f"{product.brand} {product.name} in multiple sizes. Key features: {', '.join(product.features[:2]).lower()}. Wrinkle-resistant fabric. Only ${product.price}.",
            f"Versatile {product.name} by {product.brand}. {' and '.join(product.features[:2])}. All-day comfort. Get them for ${product.price}.",
            f"{product.brand} {product.name} - {', '.join(product.features[:2]).lower()}. Professional quality at ${product.price}.",
            f"Premium {product.name} from {product.brand}. Features {' with '.join(product.features[:2]).lower()}. Easy care. Special price: ${product.price}."
        ],
        
        "accessories": [
            f"Must-have {product.name} from {product.brand}. Crafted with {' and '.join(product.features[:2]).lower()}. Matches any outfit. Special price ${product.price}.",
            f"Elevate your look with {product.brand} {product.name}. {' and '.join(product.features[:2])}. Timeless style. Only ${product.price}.",
            f"{product.brand} {product.name} - {', '.join(product.features[:2]).lower()}. Perfect finishing touch. Get yours for ${product.price}.",
            f"Statement {product.name} by {product.brand}. Features {' with '.join(product.features[:2]).lower()}. Quality craftsmanship. ${product.price}."
        ]
    }
    
    # Default templates if category not found
    default_templates = [
        f"Quality {product.brand} {product.name} featuring {' plus '.join(product.features[:2]).lower()}. Durable construction meets style. Get yours for ${product.price}.",
        f"{product.brand} {product.name} - {', '.join(product.features[:2]).lower()}. Premium quality at an affordable price. Only ${product.price}.",
        f"Discover {product.brand} {product.name}. {' and '.join(product.features[:2])}. Great value at ${product.price}.",
        f"{product.name} by {product.brand}. Features {' with '.join(product.features[:2]).lower()}. Shop now for ${product.price}."
    ]
    
    # Select random template from category or default
    category_templates = templates_by_category.get(product.category, default_templates)
    return random.choice(category_templates)

# Additional endpoints for future expansion
@app.post("/api/generate-product-tags")
async def generate_product_tags(product: ProductFeatures):
    """Generate SEO-friendly tags for products"""
    if not gemini_model:
        # Fallback tag generation
        basic_tags = [product.category, product.brand.lower().replace(" ", "-"), "fashion", "style"]
        return {"tags": basic_tags, "method": "template"}
    
    try:
        prompt = f"""
        Generate 8-10 SEO-friendly tags for this product:
        Name: {product.name}
        Category: {product.category}
        Features: {', '.join(product.features)}
        
        Return only comma-separated tags, no explanations.
        """
        
        response = gemini_model.generate_content(prompt)
        tags = [tag.strip() for tag in response.text.split(',')]
        return {"tags": tags, "method": "ai"}
        
    except Exception as e:
        return {"error": str(e)}, 500

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
