import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";
import { Img } from "@react-email/img";
import { Section } from "@react-email/section";

export const OrderConfirmation = ({
  name,
  orderId,
  service,
  imageUrl,
  prise,
}: {
  name: string;
  orderId: string;
  service: string;
  imageUrl?: string;
  prise?: number;
}) => (
  <Html lang="uk">
    <Head />
    <Container style={{ fontFamily: "Arial, sans-serif", color: "#0C1420" }}>
      <Section>
        <Img
          src="https://www.cucinaroma.com.ua/images/logo.png"
          alt="Твій Гід у Римі"
          width="100"
          style={{ margin: "0 auto" }}
        />
      </Section>
      <Section style={{ borderTop: "1px solid #ddd", margin: "20px 0" }} />
      <Section>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 600 }}>
          Дякуємо {name} за замовлення!
        </Text>
        <Text style={{ textAlign: "center" }}>{service}</Text>
      </Section>

      <Section>
        <Text>
          <strong>Ваше замовлення: №{orderId}</strong>
        </Text>
        <Text>
          До сплати: <strong>{prise}€</strong>
        </Text>
        <Text>
          Метод оплати: <strong>карткою</strong>
        </Text>
        <Text>
          Термін оплати: <strong>24 години</strong>
        </Text>
      </Section>

      <Section>
        <Text>
          <strong>Реквізити для оплати:</strong>
        </Text>
        <Text>Отримувач: Ім’я Прізвище</Text>
        <Text>Код ЄДРПОУ: 1234222</Text>
        <Text>IBAN: UA472843209994214232</Text>
        <Text>Призначення платежу: Платіж за послугу: {service}</Text>
      </Section>

      <Section>
        <Text>
          Для активації бронювання після оплати необхідно написати або
          зателефонувати до нас. Бронювання події відбувається мінімально за 2
          тижні до бажаної дати і часу.
        </Text>
        <Text>Деталі замовлення: №{orderId}</Text>
        <Img src={`https://www.cucinaroma.com.ua${imageUrl}`} width="100%" />
        <Text>
          <strong>Майстер-клас: {service}</strong>
        </Text>
        <Text style={{ color: "#5F5F5F" }}>2 години</Text>
        <Text style={{ color: "#5F5F5F" }}>
          📍 00184 Roma RM, Via del Pellegrino, 24
        </Text>
      </Section>
      <Section>
        <Text>
          У вартість входить майстер-клас для однієї особи. Бронювання не є
          іменим, тому ви можете передати його на ваш розсуд або використати для
          себе. Електронне бронювання є дійсним після покупки протягом
          {new Date().getFullYear()} року. Ваша ідеальна подорож у
          гастрономічний світ Італії! 
        </Text>
        <Text style={{ color: "#5F5F5F" }}>
          Бронювання є дійсним після покупки протягом {new Date().getFullYear()}{" "}
          року.
        </Text>
      </Section>

      <Section>
        <Text>Контакти:</Text>
        <Text>📞 +38 096 123 45 65</Text>
        <Text>📧 guide.transfer.roma@gmail.com</Text>
      </Section>
    </Container>
  </Html>
);
