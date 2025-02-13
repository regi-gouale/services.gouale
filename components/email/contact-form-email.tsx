import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouveau message de contact</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Nom:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  padding: "0 48px",
};

const section = {
  padding: "0 48px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
};

const messageText = {
  ...text,
  backgroundColor: "#f9fafb",
  padding: "12px",
  borderRadius: "4px",
  whiteSpace: "pre-wrap",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};
