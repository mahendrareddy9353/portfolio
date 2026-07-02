import { motion } from "framer-motion";

const skillData = [

{
title:"Backend",

skills:[
"Java",
"Spring Boot",
"Spring MVC",
"Spring Security",
"REST API",
"Hibernate",
"JPA",
"Microservices"
]
},

{
title:"Frontend",

skills:[
"HTML5",
"CSS3",
"JavaScript",
"React.js",
"Tailwind CSS",
"Bootstrap"
]
},

{
title:"Database",

skills:[
"MySQL"
]
},

{
title:"Tools",

skills:[
"Git",
"GitHub",
"Maven",
"Eclipse",
"IntelliJ IDEA",
"VS Code",
"Postman"
]
}

];

export default function Skills(){

return(

<section
id="skills"
className="py-28 px-6"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-16">
Skills
</h2>

<div className="grid md:grid-cols-2 gap-10">

{
skillData.map((category,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.2}}

className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20"

>

<h3 className="text-3xl text-cyan-400 mb-8">

{category.title}

</h3>

{

category.skills.map((skill,i)=>(

<div key={i} className="mb-6">

<div className="flex justify-between">

<span>{skill}</span>

<span>90%</span>

</div>

<div className="h-3 bg-gray-800 rounded-full mt-2 overflow-hidden">

<motion.div

initial={{width:0}}

whileInView={{width:"90%"}}

transition={{duration:1}}

className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"

>

</motion.div>

</div>

</div>

))

}

</motion.div>

))

}

</div>

</div>

</section>

)

}