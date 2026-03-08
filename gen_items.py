import json, random, os
os.makedirs('closet/src/main/resources', exist_ok=True)

sizes=["XS","S","M","L","XL","XXL"]
colors=["Black","White","Red","Blue","Green","Yellow","Gray","Pink","Brown"]
patterns=["Solid","Striped","Checked","Graphic","Floral","Polka Dot","Paisley","Camouflage"]
brands=["H&M","Zara","Uniqlo","Gucci","Nike","Adidas","Levi's","Gap","Forever21","Puma"]
descriptors=["Classic","Oversized","Slim Fit","Graphic Printed","Embroidered","Vintage","Minimal","Retro"]
genders=["Men's","Women's","Unisex"]
items=[]
for i in range(1,201):
    size=random.choice(sizes)
    color=random.choice(colors)
    pattern=random.choice(patterns)
    brand=random.choice(brands)
    descriptor=random.choice(descriptors)
    gender=random.choice(genders)
    name=f"{gender} {color} {descriptor} {pattern} {brand} T-shirt #{i}"
    items.append({
        "id":str(i),
        "name":name,
        "size":size,
        "color":color,
        "pattern":pattern,
        "brand":brand,
        "descriptor":descriptor
    })
with open('closet/src/main/resources/items.json','w') as f:
    json.dump(items,f,indent=2)
print('wrote',len(items),'records to items.json')
