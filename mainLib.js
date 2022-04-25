const mainDiv = document.querySelector('.main')


export function getProducts(){
    let productArray

    fetch("http://localhost:3000/wp-json/wc/v3/products?oauth_consumer_key=ck_d193b472e0270d7c98eebfccee1cee3813b6a1cb&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650879700&oauth_nonce=26RyBX5RORC&oauth_version=1.0&oauth_signature=4JY%2BU5fburppB0lD4mJp2D9L2q8%3D",{
        method:'GET'
    })
    .then(response => response.json())
    .then(result => productArray = result)
    .then(()=>{
        productArray.map(data => {
        
            return addProductCard(data.name, data.images[0].src, data.permalink,data.categories[0].name, data.price, data.short_description, data.categories[0].slug);
        })

    })
    .catch(error => console.log('error', error));
    
}







function addProductCard(name,img,pl,cat,price,shortDesc,slug){
    
    const productCardCon = document.createElement('div'),
    productImg = document.createElement('img'),
    picTitle = document.createElement('a'),
    prodCat = document.createElement('a'),
    prodPrice = document.createElement('p'),
    prodDesc = document.createElement('p')


    
    productCardCon.classList.add('productCardCon')
    productImg.classList.add('productImg')
    picTitle.classList.add('title')
    prodCat.classList.add('prodCat')
    prodPrice.classList.add('prodPrice')   
    prodDesc.classList.add('prodDesc')
    
    mainDiv.append(productCardCon)
    productCardCon.append(productImg)
    productCardCon.append(picTitle)
    productCardCon.append(prodCat)
    productCardCon.append(prodPrice)
    productCardCon.append(prodDesc)
    
    const stringRep = shortDesc.replace('<p>', ''),
    stringRep2 = stringRep.replace('</p>', '')

    productImg.src = img
    picTitle.innerText = name
    picTitle.href = pl
    prodCat.innerText = cat
    prodCat.href = `http://localhost:3000/product-category/${slug}/`

    prodPrice.innerText = `${price}kr`
    prodDesc.innerText = stringRep2

    
}

export function getOrders(){
    let  orderArray

    fetch("http://localhost:3000/wp-json/wc/v3/orders?page=1&per_page=2&oauth_consumer_key=ck_d193b472e0270d7c98eebfccee1cee3813b6a1cb&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650880003&oauth_nonce=4xPallhDCmp&oauth_version=1.0&oauth_signature=w9H%2Bs%2B69XA7z8XHPaau%2BIYrLJfI%3D",{
        method:'GET'
    })
    .then(response => response.json())
    .then(result => orderArray = result)
    .then(()=>{
    orderArray.map((data) => {

            return addOrdersCard(data.id,data.status,data.total,data.date_created_gmt, data.billing.first_name,data.billing.last_name,data.billing.address_1, data.billing.country, data.billing.email, data.line_items[0].name, data.line_items[1].name);

        })

    })
    .catch(error => console.log('error', error));
    


    
}

function addOrdersCard(ID,status,sum,datum,customerfname,customerlname,customerAddress,customerCountry,customerEmail,items,items1){

    const ordersCardCon = document.createElement('div'),
    ordID = document.createElement('p'),
    ordStat = document.createElement('p'),
    ordSum = document.createElement('p'),
    ordDate = document.createElement('p')
    

    mainDiv.append(ordersCardCon)
    ordersCardCon.append(ordID)
    ordersCardCon.append(ordStat)
    ordersCardCon.append(ordSum)
    ordersCardCon.append(ordDate)


    ordersCardCon.classList.add('ordersCardCon')
    ordID.classList.add('ordID')
    ordStat.classList.add('ordStat')
    ordSum.classList.add('ordSum')
    ordDate.classList.add('ordDate')



    const date = datum.replace('T',' ')


    ordID.innerText = ID
    ordStat.innerText = status
    ordSum.innerText = `${sum}kr `
    ordDate.innerText = date
    
    if(status == 'processing'){
        ordStat.style.backgroundColor = '#F7D96A'
        ordStat.style.padding = '10px'
        ordStat.style.borderRadius = '10%'
    } else if(status == 'completed'){
        ordStat.style.backgroundColor = '#92D36E'
        ordStat.style.padding = '10px'
        ordStat.style.borderRadius = '10%'
    } else if(status == 'pending'){
        ordStat.style.backgroundColor = '#F73939'
        ordStat.style.padding = '10px'
        ordStat.style.borderRadius = '10%'
    }

    ordersCardCon.addEventListener('click',() =>{
        
        ordDisp.style.display = 'flex'
        container.style.display= "flex"
    })
    

    
    const ordDisp = document.createElement('div'),
        custInfoCon = document.createElement('div'),
        custInfoTitle = document.createElement('h1'),
        custfname= document.createElement('p'),
        custlname= document.createElement('p'),
        custAddress= document.createElement('p'),
        custCountry= document.createElement('p'),
        custEmail= document.createElement('p'),
        custOrderCon = document.createElement('div'),
        custOrderTitle = document.createElement('h1'),
        custOrder = document.createElement('p'),
        custOrder2 = document.createElement('p'),
        closeOrdDisp = document.createElement('div')
        

        mainDiv.append(ordDisp)
        ordDisp.append(closeOrdDisp)
        ordDisp.append(custInfoCon)
        ordDisp.append(custOrderCon)
        custInfoCon.append(custInfoTitle)
        custInfoCon.append(custfname)
        custInfoCon.append(custlname)
        custInfoCon.append(custAddress)
        custInfoCon.append(custCountry)
        custInfoCon.append(custEmail)
        custOrderCon.append(custOrderTitle)
        custOrderCon.append(custOrder)
        custOrderCon.append(custOrder2)
        

        ordDisp.classList.add('ordDisp')
        custInfoCon.classList.add('custInfoCon')
        custInfoTitle.classList.add('custInfoTitle')
        
        custOrderTitle.classList.add('custOrderTitle')
        custOrder.classList.add('custOrder')
        custOrder2.classList.add('custOrder2')
        closeOrdDisp.classList.add('closeOrdDisp')
        custOrderCon.classList.add('custOrderCon')
        
        closeOrdDisp.innerText = '❌'

        custInfoTitle.innerText = 'Kundinformation'
        custfname.innerText = `First name: ${customerfname}`
        custlname.innerText = `Last name: ${customerlname}`
        custAddress.innerText = `Address: ${customerAddress}`
        custCountry.innerText = `Country: ${customerCountry}`
        custEmail.innerText = `E-mail: ${customerEmail}`

        custOrderTitle.innerText = 'Beställda Produkter'
        custOrder.innerText = items

        
        custOrder2.innerText = items1

        const container = document.querySelector('.container')
        closeOrdDisp.addEventListener('click', ()=>{
            ordDisp.style.display = 'none'
            container.style.display ="none"
        })
    

}

export function getBlogPost(){
    let blogArray 

    fetch("http://localhost:3000/wp-json/wp/v2/posts?_embed",{
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => blogArray = result)
    .then(()=> {
        blogArray.map(data =>{
            
            return addBlogCard(data.title.rendered,data.guid.rendered,data._embedded['wp:featuredmedia']['0'].source_url);
        })
    })
    .catch(error => console.log('error', error));


}

function addBlogCard(title,link,media){

    const blogCardCon = document.createElement('div'),
    blogImg = document.createElement('img'),
    blogAnchor = document.createElement('a')
    

    mainDiv.append(blogCardCon)
    blogCardCon.classList.add('blogCardCon')

    blogCardCon.append(blogImg)
    blogImg.classList.add('blogImg')
    blogImg.src = media
    blogCardCon.append(blogAnchor)
    
    blogAnchor.classList.add('blogAnchor')
    blogAnchor.href = link
    blogAnchor.innerText = title
    
}


