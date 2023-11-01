
export default function About() {
    return (
        <div className="row-start-3 col-span-4 lg:flex ">
            <FurnitureImg
            imgSrc='/images/image-about-dark.jpg'
            altImg='Furniture dark images'
            />
            <AboutContent/>
            <FurnitureImg
            imgSrc='/images/image-about-light.jpg'
            altImg='Furniture light images'
            />
        </div>
    )
}

const FurnitureImg = ({imgSrc, altImg}) => <img src={imgSrc} alt={altImg} className="mx-auto"/>

const AboutContent = () => {
    return (
      <div className="px-[1.875em] lg:self-center ">
        <h2 className="uppercase font-bold text-[1.1rem] tracking-[6px] mt-12  ml-8 mb-6 lg:text-[1.2rem] lg:ml-10 ">About our furniture</h2>
        <p className="text-dark-gray text-lg font-medium px-[2em] mb-12 lg:text-xl ">  Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
    )
}