import Button from "../../components/Button";
export default function AboutHero() {
  return (
    <main>
      <h1>Every Book Has a Story. So Do We</h1>
      <div>
        <p>
          The Reading Haven was built on a simple idea: the right book can
          change the way you see the world. We bring together stories, ideas,
          and knowledge from across generations, creating a space where
          curiosity meets discovery.
        </p>
        <p>
          Whether you're searching for your next favourite novel, expanding your
          knowledge, or introducing someone to the joy of reading, we're here to
          help you find the perfect book.
        </p>
      </div>
      <div>
        <Button to="/newbook/popular">Explore Our Collection</Button>
        <Button to="/contactus">Get in Touch</Button>
      </div>
    </main>
  );
}
