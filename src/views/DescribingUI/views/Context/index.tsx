import Section from './Section';
import Heading from './Heading';

export default function Context() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>次标题</Heading>
        <Heading>次标题</Heading>
        <Section>
          <Heading>次次标题</Heading>
          <Heading>次次标题</Heading>
          <Section>
            <Heading>次次次标题</Heading>
            <Heading>次次次标题</Heading>
            <Section>
              <Heading>次次次次标题</Heading>
              <Heading>次次次次标题</Heading>
              <Section>
                <Heading>次次次次次标题</Heading>
                <Heading>次次次次次标题</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
