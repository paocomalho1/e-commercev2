<template>
    <h2>About Our Sneaker Company</h2>
    <p>At Sneakers, we're not just in the business of making sneakers; we're in the business of creating exceptional experiences and pushing the boundaries of style, comfort, and innovation. Our journey began with a simple idea: to craft sneakers that inspire confidence, support adventures, and reflect individuality.</p>
    <h2>Our Passion for Sneakers</h2>
    <p>Sneakers are more than just footwear to us; they are a form of self-expression. We're passionate about every pair we create, infusing them with the perfect blend of artistry, technology, and craftsmanship. Each sneaker is a testament to our dedication to quality and design excellence.</p>
    <h2>Innovation as Our Guiding Light</h2>
    <p>In the ever-evolving world of sneakers, we stay ahead of the curve by embracing innovation. From cutting-edge materials to sustainable practices, we're committed to making a positive impact on both your style and the environment. Our dedication to research and development drives us to constantly improve and deliver the best.</p>
    <h2>A Community of Sneaker Enthusiasts</h2>
    <p>We're proud to be a part of a global community of sneaker enthusiasts. Our sneakers aren't just products; they're the threads that connect us all. We believe in fostering this sense of community and celebrating the diversity of styles, interests, and passions that our customers bring.</p>
    <h2>Our Commitment to You</h2>
    <p>Sneakers is more than just a brand; it's a promise. We promise to provide you with sneakers that are not only comfortable and stylish but also inspire you to pursue your passions, set new records, and explore uncharted territories.</p>
    <p>Thank you for choosing Sneakers. We're excited to continue this journey with you, one step at a time.</p>
    <p>Sincerely,</p>
    <p>Erick</p>
    <p>Founder, Sneakers</p>
</template>

<script>
export default{
    name: 'AboutView'
}
</script>

<style scoped lang="scss">
@import '../utils/index.scss';
h2{
    @include kumbh-sans-700;
    font-size: 2rem;
    margin: 2rem 0;
    padding-bottom: 0.2rem;
    border-bottom: solid 3px $Light-grayish-blue;
}
p{
    @include kumbh-sans-400;
    margin-bottom: 2rem;
}
</style>