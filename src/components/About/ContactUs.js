import style from "./About.module.css"

export default function ContactUs({pathname}) {
	const storeAddress = `
    153 Music Street,
    Melody City,
    Musictown,
    Musiclandia
  `

	return <section className={style.section}>
		<h1>Contact Us - Music Store</h1>
		<p>If you have any questions, feedback, or inquiries, please feel free to get in touch with us. We are here to assist you!</p>

		<h2>Address:</h2>
		<p>{storeAddress}</p>

		<h2>Email:</h2>
		<p>info@musicstore.com</p>

		<h2>Phone:</h2>
		<p>0123456789</p>

		<p>We look forward to hearing from you and providing the best support for your musical needs.</p>
	</section>
}