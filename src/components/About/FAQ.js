import style from "./About.module.css"

const FAQ_JSX = <section className={style.section}>
    <h1 className={style.h1}>Frequently Asked Questions - Music Store</h1>
    <h2 className={style.h2}>1. How can I place an order?</h2>
    <p className={style.p}>To place an order, simply browse our website, add the desired products to your cart and proceed to checkout. Follow the steps to provide your shipping and payment information. Once your order is confirmed, you will receive an email with the order details.</p>

    <h2 className={style.h2}>2. What payment methods do you accept?</h2>
    <p className={style.p}>We accept various payment methods, including credit/debit cards and other online payment options. Rest assured that your payment information is secure and protected.</p>

    <h2 className={style.h2}>3. Do you offer international shipping?</h2>
    <p className={style.p}>Yes, we offer international shipping to many countries. Shipping costs will be calculated based on your selected delivery method and location. Please note that any customs duties or taxes for international orders are the responsibility of the buyer.</p>

    <h2 className={style.h2}>4. Can I return a product if I am not satisfied?</h2>
    <p className={style.p}>Yes, we want you to be completely satisfied with your purchase. If, for any reason, you are not happy with your order, you may request a return or exchange within 30 days of delivery. Please review our Returns and Refunds policy for more information.</p>

    <h2 className={style.h2}>5. Are all products brand new?</h2>
    <p className={style.p}>Yes, all products sold on Music Store are brand new and sourced directly from reputable manufacturers and distributors. We do not sell used or refurbished items.</p>

    <h2 className={style.h2}>6. How long does shipping take?</h2>
    <p className={style.p}>We strive to process and ship orders promptly. Delivery times may vary depending on your location and product availability. We will provide estimated delivery times during the checkout process, but please note that these are not guaranteed.</p>

    <h2 className={style.h2}>7. Can I cancel my order?</h2>
    <p className={style.p}>If you wish to cancel your order, please contact our customer support as soon as possible. If your order has not been shipped, we will do our best to accommodate your request. However, once the order is shipped, it cannot be canceled and you may need to follow the return process.</p>

    <h2 className={style.h2}>8. Are there any exclusions for returns?</h2>
    <p className={style.p}>While most products are eligible for return or exchange, certain items, such as software, digital downloads and personalized products, may not be eligible. Please review our Returns and Refunds policy for specific details on eligible items.</p>

    <h2 className={style.h2}>9. Do you offer warranty on your products?</h2>
    <p className={style.p}>Yes, many of our products come with a manufacturer's warranty. Warranty details can be found on the product pages or in the product documentation. If you encounter any issues with a warranted item, please contact our customer support for assistance.</p>

    <h2 className={style.h2}>10. How can I contact customer support?</h2>
    <p className={style.p}>If you have any questions, concerns or need assistance, you can reach our customer support team through the following channels:
        <ul className={style.ul}>
            <li>Email: support@musicstore.com</li>
            <li>Phone: 0123456789</li>
            <li>Live Chat: Available on our website during business hours</li>
        </ul>
    </p>

    <p className={style.p}>If you have any other questions or need further information, don't hesitate to contact us. We're here to help!</p>
</section>

export default FAQ_JSX