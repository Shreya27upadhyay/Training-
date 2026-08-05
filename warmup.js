//PART A (Javascript warm-up)

//A1 (Variables & Data Types)

const title ="My First Note";
const isPinned = false;
const tags = ["personal", "todo"];

console.log("A1:");
console.log(title, typeof title);
console.log(isPinned, typeof isPinned);
console.log(tags, typeof tags);



//A2 (Simple Function)
const makeNote = (title,content) => {
    return {
        title,
        content,
        createdAt: new Date()
    };
};
console.log("\n A2: ");
console.log(makeNote("groceries", "Milk, eggs, bread"));


//A3 (Arrays: Loop Through Notes)
const notes = [
    {
        title: "groceries",
        content: "Milk, eggs"
    },
    {
        title: "Workout",
        content: "Legs day"
    },
    {
        title: "Reading",
        content: "Finish chapter 3"
    }
];
const titles = notes.map(note => note.title);
console.log("\n A3: ");
console.log(titles);


//A4 (Destructuring & Template Literals)
const {title: noteTitle, content} =notes[0];
console.log("\n A4: ");
console.log(`${noteTitle}: ${content}`);


//A4 (Async/Await Basics)
async function getSampleData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("\n A5: ");
        console.log(data);
    }catch (error){
        console.error("ErrormFetching Data:", error);
    }
}
getSampleData();