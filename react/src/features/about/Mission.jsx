import AboutImage from "../../assets/yagami.jpg";

export default function Mission() {
  return (
    <main>
      <div>
        <div>
          <h1>Our Mission: Making Knowledge Accessible to Everyone</h1>
          <p>
            Our mission is to make reading an accessible, inspiring, and
            meaningful part of everyday life.
          </p>
          <p>
            We strive to connect readers with books that educate, challenge
            perspectives, spark imagination, and encourage personal growth.
            Through thoughtfully curated collections and accessible digital
            reading experiences, we aim to create opportunities for everyone to
            discover the transformative power of knowledge.
          </p>
          <p>
            We don't simply want to sell books. We want to cultivate a community
            of curious minds and lifelong learners.
          </p>
        </div>

        <div>
          <img src={AboutImage} />
        </div>
      </div>
    </main>
  );
}
