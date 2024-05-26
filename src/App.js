import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';

const richTextData1 = {
  "convo_id": "dcba7adb-5144-4044-a793-21164c3eab00",
  "role": "assistant",
  "type": "answer",
  "renderFeedback": true,
  "content": "Certainly! Let's dive into a demonstration that blends a combination of LaTeX (for mathematical expressions) and Markdown (for formatted text). We'll use an example situation where we need to calculate the quadratic roots and also apply some basic formatting rules in Markdown.\n\n### Markdown Basics\n\nMarkdown is a lightweight markup language with plain text formatting syntax. It's designed so that it can be converted to HTML and many other formats. It's very popular for writing on the internet, documenting software, and maintaining readable issue logs.\n\n#### Common Markdown Elements\n\n- **Bold**: To bold text, wrap it with two asterisks `**` like this: `**bold**`.\n- *Italic*: To italicize text, wrap it with underscores `_` like this: `_italic_`.\n- `Code`: To create inline code, wrap the text with backticks `` ` `` like this: `` `code` ``.\n\n### LaTeX Basics\n\nLaTeX is widely used for the communication and publication of scientific documents in many fields, including mathematics, computer science, engineering, physics, chemistry, and economics. It allows for precise control over the document's presentation, especially complex mathematical formulas.\n\n#### Sample LaTeX Equation\n\nThe quadratic formula for solving equations of the form \\( ax^2 + bx + c = 0 \\) is given by:\n\n\\[\nx = \\frac{{-b \\pm \\sqrt{{b^2 - 4ac}}}}{2a}\n\\]\n\n#### Example Calculation\n\nLet's calculate the roots of the equation \\( 2x^2 + 3x - 2 = 0 \\) using LaTeX.\n\n1. First, identify the coefficients: \\( a = 2 \\), \\( b = 3 \\), and \\( c = -2 \\).\n2. Substitute in the quadratic formula:\n   \n   \\[\n   x = \\frac{{-3 \\pm \\sqrt{{3^2 - 4 \\cdot 2 \\cdot (-2)}}}}{2 \\cdot 2}\n   \\]\n\n3. Solve under the square root:\n\n   \\[\n   \\sqrt{{9 + 16}} = \\sqrt{25} = 5\n   \\]\n\n4. Finally, calculate the roots:\n\n   \\[\n   x_1 = \\frac{{-3 + 5}}{4} = 0.5, \\quad x_2 = \\frac{{-3 - 5}}{4} = -2\n   \\]\n\n#### Displaying the Results in LaTeX\n\nThe solutions are \\( x_1 = 0.5 \\) and \\( x_2 = -2 \\). These can be displayed in LaTeX as follows:\n\n\\[\n\\begin{array}{c}\nx_1 = 0.5 \\\\\nx_2 = -2\n\\end{array}\n\\]\n\nThis example covered basic formatting in Markdown and a basic mathematical calculation using LaTeX. Feel free to ask for examples or explanations on other topics or more complex scenarios!"
};

const richTextData2 = {
  "role": "assistant",
  "content": "Certainly! Let's explore different LaTeX constructs to enrich your understanding, including equations, matrices, and even a way to describe an image insertion process in a document.\n\n### 1. Matrices\n\nHere’s how you can write a matrix in LaTeX. This could be useful when you want to describe systems of equations or any array-like data structurally.\n\n$$\n\\begin{array}{ccc}\n1 & 2 & 3 \\\\\n4 & 5 & 6 \\\\\n7 & 8 & 9 \\\\\n\\end{array}\n$$\n\n### 2. Equations\n\nLet's write out a calculus equation involving derivatives, often seen in physics or engineering.\n\n$$\n\\frac{d}{dt} \\left( \\int_{0}^{t} f(s) ds \\right) = f(t)\n$$\n\n### 3. Greek Letters and Subscripts\n\nIn scientific documents, you often need Greek letters and subscripts. Here's an example with the Greek letter \\(\\alpha\\) and subscripts:\n\n$$\n\\alpha_1, \\alpha_2, \\ldots, \\alpha_n\n$$\n\n### 4. Summation and Product\n\nSummation and product notation are essential in mathematics, especially in statistics and algebra.\n\n$$\n\\sum_{i=1}^{n} i^2 \\quad \\text{and} \\quad \\prod_{i=1}^{n} i\n$$\n\n### 5. Images in LaTeX documents\n\nWhile LaTeX primarily handles text and equations, adding images is a common requirement.\n"
};

const RichTextRenderer = ({ data }) => {
  return (
    <div>
      <h3>Original LaTeX Input:</h3>
      <pre>{data.content}</pre>
      <h3>Rendered Output:</h3>
      <ReactMarkdown
        children={data.content}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Rich Text Renderer</h1>
      <h2>Response 1:</h2>
      <RichTextRenderer data={richTextData1} />
      <h2>Response 2:</h2>
      <RichTextRenderer data={richTextData2} />
    </div>
  );
};

export default App;
