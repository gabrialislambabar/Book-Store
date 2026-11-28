export default function ContactInfoLink(logosrc, text1, text2, text3) {
  return (
    <main>
      <div>
        <img src={logosrc} />
        <h1>Contact details</h1>
        <h1>{text1}</h1>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </main>
  );
}
