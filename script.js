console.log('reviews')

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let reviewContent = document.getElementById('reviewContent');
let userImage = document.getElementById('userImage');
let counter = 0;

const reviews = [
    {
        imageUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userReview: "Our experience with [Your Brand] was nothing short of exceptional. From the moment we engaged with their products, we were impressed by the quality and craftsmanship. Moreover, their customer service team went above and beyond to ensure our satisfaction. Highly recommended for anyone seeking top-notch products and service!"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userReview: "[Your Brand] sets the bar high with its innovative and reliable solutions. Their products not only meet but exceed our expectations every time. The attention to detail and dedication to customer satisfaction truly make them stand out in the market. Kudos to the team for consistently delivering excellence!"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userReview: "We've been loyal customers of [Your Brand] for years, and for good reason. Their products offer unparalleled performance and durability, making them a staple in our daily lives. Whether it's their cutting-edge technology or robust design, we can always rely on [Your Brand] to deliver outstanding results."
    }
]

nextBtn.addEventListener('click',()=>{
    console.log('next')
    let curr = Math.abs(++counter)%reviews.length;
    userImage.src = reviews[curr].imageUrl;
    reviewContent.innerText=reviews[curr].userReview;
    console.log(counter)
})

prevBtn.addEventListener('click',()=>{
    console.log('prev')
    let curr = Math.abs(--counter)%reviews.length;
    userImage.src = reviews[curr].imageUrl;
    reviewContent.innerText=reviews[curr].userReview;
    console.log(counter)
})