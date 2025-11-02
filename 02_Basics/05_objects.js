const course = {
    courseName : "Python and suraj",
    price : 999,
    courseInstructor : "Suraj"
}

// course.courseInstructor
// This is called object destructing 
 
const {courseInstructor : instructor} = course

console.log(courseInstructor);
console.log(instructor); 

// example --
// in react they assume we know the constructor 
// const navbar = (prop.company) => {
const navbar = ({company}) => {

}
navbar(company = "suraj")

// lets check out 
// ? whats JSONhow to use JSON
// why api returns JSON
// JSON -- type -- mode 

// lets check website  ---  random api generator
// also we can check json formatter and beautify  to understand JSON