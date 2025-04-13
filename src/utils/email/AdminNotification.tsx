import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export const AdminNotification = ({
  name,
  phone,
  email,
  service,
  orderId,
}: {
  name: string;
  phone: string;
  email: string;
  service: string;
  orderId: string;
}) => (
  <Html lang="uk">
    <Head />
    <Container
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        padding: "24px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Section>
        <Text style={{ fontSize: "20px", fontWeight: "bold", color: "#333" }}>
          🆕 Нове замовлення №{orderId}
        </Text>

        <Text>
          <strong>{service}</strong>
        </Text>

        <Text style={{ marginTop: "12px", fontWeight: "bold" }}>
          Контактні дані клієнта:
        </Text>
        <Text>👤 Ім’я: {name || "не вказано"}</Text>
        <Text>📞 Телефон: {phone || "не вказано"}</Text>
        <Text>📧 Email: {email || "не вказано"}</Text>

        <Text style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          Це автоматичне повідомлення про нове замовлення.
        </Text>
      </Section>
    </Container>
  </Html>
);
