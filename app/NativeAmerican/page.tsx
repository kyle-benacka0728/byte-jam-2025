import Card from '../../components/card';

export default function NativeAmerican() {
    const testData = [
        {imgSrc: "../static/orange.jpeg", text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ", altText: "Test", title: "Test Card"},
        {imgSrc: "../static/orange.jpeg", text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 2 ", altText: "Test", title: "Test Card"},
        {imgSrc: "../static/orange.jpeg", text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 3 ", altText: "Test", title: "Test Card"},
        {imgSrc: "../static/orange.jpeg", text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 4", altText: "Test", title: "Test Card"},
        {imgSrc: "../static/orange.jpeg", text: "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test 5", altText: "Test", title: "Test Card"},

    ]
  return (
    <div>
      <h1>NativeAmerican</h1>
      <p>Welcome to the Native American page!</p>
        {testData.map((item, i) => (
            <Card key={i} imgSrc={item.imgSrc} text={item.text} altText={item.altText} title={item.title} />
        ))}
    </div>
  );
}