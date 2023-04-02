import captureWebsite from "capture-website";
import express from "express";

const app = express();
const port = process.env.port || 3000;

// await captureWebsite.file('https://newyork-centralpost.com', new Date().getTime()+'_screenshot.png').then((ss)=>{
//     console.log(ss)
// });


app.get("/",(req,res)=>{
    res.send("ss app live..");
})
//captureWebsite.buffer(input, options?)
app.post("/ss", async (req, res) => {
	const ss = await captureWebsite
		.buffer("https://newyork-centralpost.com")
		.then((ss) => {
			console.log(ss);
			res.send(ss);
		})
		.catch((e) => {
			res.send(e);
		});

        res.send(ss);
});

app.listen(port, () => {
	console.log("server running at port" + port);
});
