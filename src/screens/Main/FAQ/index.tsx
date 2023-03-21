/* eslint-disable react/no-unescaped-entities */
import Container from '@components/Container';
import {
  Section,
  Text,
  Item,
} from './styled';

function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <Text>
          <h3>Questions</h3>
          <p>More questions? Book a call</p>
        </Text>

        <div>
          <Item>
            <h6>How can I pay?</h6>
            <p>
              You can pay with your Visa, Maestro, MasterCard,
              Discover/Novus, Diners Club and American Express card or use PayPal.
              To process credit card payments we use Stripe.
            </p>
          </Item>

          <Item>
            <h6>Can I cancel my plan?</h6>
            <p>
              You can cancel your subscription any time
              from your account and let it expire back to the Free Plan.
            </p>
          </Item>

          <Item>
            <h6>What's your refund policy?</h6>
            <p>
              We have a 7-day money back guarantee!
            </p>
          </Item>
        </div>
      </Container>
    </Section>
  );
}

export default FAQ;
