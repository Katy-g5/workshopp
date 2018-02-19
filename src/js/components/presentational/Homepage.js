import React from "react";
import './Homepage.scss';
import './mobile.scss';

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerClass: 'header floating',
			contactSpinner: 'none',
			subscribeSpinner: 'none'
		};
		this.handleScroll = this.handleScroll.bind(this);
	};
	sendMsg(spinner) {
		this.setState({ [spinner]: 'wait' })
		setTimeout(()=> {
			this.setState({ [spinner]: 'sent' })
			setTimeout(()=> {
				this.setState({ [spinner]: 'none' })
			}, 3000)
		}, 2000)
	}
	inputChange(e) {

	}
	slideMenu() {
		let menu = document.getElementById('slide-menu');
		if (menu.classList.contains('closed')) {
			menu.classList.remove('closed')
		} else {
			menu.classList.add('closed')
		}
	}
	scrollToLink(Id) {
		let menu = document.getElementById('slide-menu')
		let el = document.getElementById(Id)
		menu.classList.add('closed')
		el.scrollIntoView()
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll() {
		let startFix = document.getElementById('hero').getBoundingClientRect();
		let endFix = document.getElementById('services').getBoundingClientRect();
		if (startFix.bottom < 0 && endFix.bottom > 88) {
			if (this.state.headerClass == 'header floating') { 
				this.setState({ headerClass: 'header fixed' })
			}
		} else {
			if (this.state.headerClass == 'header fixed') { 
				this.setState({ headerClass: 'header floating' })
			}
		}
	}
	render() {
		return(
			<div className="main-container">
				<section className='mobile-header'>
					<i onClick={this.slideMenu.bind(this)} className="fa fa-bars" aria-hidden="true"></i>
					<ul id='slide-menu' className='slide-menu closed'>
						<li onClick={this.scrollToLink.bind(this, 'about')}>About</li>
						<li onClick={this.scrollToLink.bind(this, 'team')}>Team</li>
						<li onClick={this.scrollToLink.bind(this, 'contactUs')}>Contact Us</li>
						<li onClick={this.scrollToLink.bind(this, 'blockchain')}>Blockchain Development</li>
						<li onClick={this.scrollToLink.bind(this, 'product')}>Product Design</li>
						<li onClick={this.scrollToLink.bind(this, 'token')}>Token Design</li>
						<li onClick={this.scrollToLink.bind(this, 'fullstack')}>Fullstack Applications</li>
					</ul>
				</section>
				<section className='hero' id='hero'>
					<img className='stars-bg' src='https://photos-3.dropbox.com/t/2/AAAVLsDmCDAXZYpaogR1OBKm2Eqey36IInSOQk_Bd-VZ9Q/12/275086915/jpeg/32x32/1/_/1/2/background-stars.jpg/EJ2rh4YCGAsgBygH/bN1xTyi-YZnQsOTSESZUw6xquDIM2WLV6RRkd9MAqDA?size=2048x1536&size_mode=3' alt='stars-bg' />
					<img className='stars-bg-mobile' src='https://photos-6.dropbox.com/t/2/AAAJBmVUANJHn5wR7e8udiEb_b8JelVICPCfauqrea5F4g/12/275086915/jpeg/32x32/1/_/1/2/hero-bg-mobile.jpg/EJ2rh4YCGD8gBygH/BBUc4OZTAK1ZcWPUwdstM_qrrUCWeTjEzEw76TiyHBo?size=2048x1536&size_mode=3' alt='stars-bg' />
					<img className='stars-bg-small' src='https://photos-4.dropbox.com/t/2/AAAG_ArBXiPMMWL0xyKWY0s5YWL-Er5mx7GHZ3HkJPHlKQ/12/275086915/jpeg/32x32/1/_/1/2/hero-bg-small.jpg/EJ2rh4YCGEcgBygH/XRtykdOyRPyAzclZYQCCZiuSGbgta4fXXk0sBR6HYF4?size=2048x1536&size_mode=3' alt='stars-bg' />
					<div>
						<img className='logo' src='https://photos-4.dropbox.com/t/2/AADaGIXJrSExUJoChsgi8DJncX9pkg8RPKf9WbPn_jkh2Q/12/275086915/png/32x32/1/_/1/2/logo-white.png/EJ2rh4YCGBEgBygH/bYrshgGfpV3xg76kjdlTKMaJV7-dwQiwH8IppVFPq2Y?preserve_transparency=1&size=2048x1536&size_mode=3' alt='logo' />
						<button onClick={this.scrollToLink.bind(this, 'contactUs')} className='general-btn'>Get In Touch</button>
						<img className='arrow-down' onClick={this.scrollToLink.bind(this, 'about')} src='https://photos-4.dropbox.com/t/2/AADnJBUbXkDcFoG-5S7nKHZlaLFc3ZceSoO6RAY2LVbrjw/12/275086915/png/32x32/1/_/1/2/arrow-down.png/EJ2rh4YCGA0gBygH/BsWvCm6Xu0G9kt-wnXJFA4lEX1vr0Hq91RM6QVxNfvo?preserve_transparency=1&size=2048x1536&size_mode=3' alt='arrow-down' />
					</div>
				</section>
				<section className='about' id='about'>
					<section className={this.state.headerClass} id='header'>
						<ul>
							<li onClick={this.scrollToLink.bind(this, 'blockchain')}>Blockchain Development</li>
							<li onClick={this.scrollToLink.bind(this, 'product')}>Product Design</li>
							<li onClick={this.scrollToLink.bind(this, 'token')}>Token Design</li>
							<li onClick={this.scrollToLink.bind(this, 'fullstack')}>Fullstack Applications</li>
						</ul>
					</section>
					<h1>About Us</h1>
					<p>The Workshopp is a select team of individuals who are the very best in their respective crafts. Together, we have over 20 years of collective experience creating, designing and writing quality software for big and small organizations.</p>
					<p>Our members are all hand-picked based on their experience, expertise and personal association: We all worked with each other in the past and know that we are an amazing team that can deliver superb results.</p>
				</section>
				<section className='services' id='services'>
					<div id='blockchain' className='single-item'>
						<img alt='blockchain-img' src='https://photos-5.dropbox.com/t/2/AAAMg6rQ_l3_5plbQg64rTQbX33xtGbJe7reMqmQ1tTNrA/12/275086915/png/32x32/1/_/1/2/code.png/EJ2rh4YCGBcgBygH/l6X4iMugFSFPsRgubwW6URmWP1ajwIWazNLA3f-0jdc?preserve_transparency=1&size=2048x1536&size_mode=3' />
						<div>
							<h1>
								<img alt='blockchain-icon' src='https://photos-3.dropbox.com/t/2/AAAZ61FAzu9Lntix-SgQcZHymCOHOPACV0wwtTtXpIVaGQ/12/275086915/png/32x32/1/_/1/2/cloud-icon.png/EJ2rh4YCGBsgBygH/GXv4G3meYxe3ZtcF2ZGBoPa_8IDlp8wi73v7I8CdjPk?preserve_transparency=1&size=2048x1536&size_mode=3' />
								Blockchain Development
							</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
							<a className='link' onClick={this.scrollToLink.bind(this, 'contactUs')}>
								Contact us for an offer
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
					</div>
					<div id='product' className='single-item'>
						<img alt='product-img' src='https://photos-3.dropbox.com/t/2/AABPBl2EntX_O-3QFC2V7B0kycXWMAzBbT-oXzwxe9jE5w/12/275086915/png/32x32/1/_/1/2/product.png/EJ2rh4YCGDwgBygH/YT79VfM01RexQ130EmmVY1Yd1LWfqGpF5d7GwsFXEoU?preserve_transparency=1&size=2048x1536&size_mode=3' />
						<div>
							<h1>
								<img alt='product-icon' src='https://photos-6.dropbox.com/t/2/AACjzACXzFs8MPpieNR9jjPQJ6sqoFR1btwH7b568C38MA/12/275086915/png/32x32/1/_/1/2/phones-icon.png/EJ2rh4YCGB4gBygH/xCA_KEed0yrdi11yBm4kamUcJjGHbB3F-85iFiz8vv4?preserve_transparency=1&size=2048x1536&size_mode=3' />
								Product Design
							</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
							<a className='link' onClick={this.scrollToLink.bind(this, 'contactUs')}>
								Contact us for an offer
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
					</div>
					<div id='token' className='single-item'>
						<img alt='Token-img' src='https://photos-2.dropbox.com/t/2/AADeFoYTAWOripXYg7RIGAITPC7o-hP09-GqcKpaaiitWg/12/275086915/png/32x32/1/_/1/2/token.png/EJ2rh4YCGBkgBygH/bW51To9B4bCWXVP-mhvlekVF6XU6k-OIUObzESxFkjk?preserve_transparency=1&size=2048x1536&size_mode=3' />
						<div>
							<h1>
								<img alt='Token-icon' src='https://photos-4.dropbox.com/t/2/AADd3L0CTm6RRgEMV419-mXl-6Vq3_TqbJCsMtGLScbtFg/12/275086915/png/32x32/1/_/1/2/diamond%20icon.png/EJ2rh4YCGBwgBygH/Kx85qPhyj616uYaGf5alMPN7v-0QsygXooaVB08jIVI?preserve_transparency=1&size=2048x1536&size_mode=3' />
								Token Design
							</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
							<a className='link' onClick={this.scrollToLink.bind(this, 'contactUs')}>
								Contact us for an offer
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
					</div>
					<div id='fullstack' className='single-item'>
						<img alt='fullstack-img' src='https://photos-6.dropbox.com/t/2/AACxFp2nb3e1VQjv8HNy3CJBeMO0T_2XPy3TrdO5ZtFkMw/12/275086915/png/32x32/1/_/1/2/web-logos.png/EJ2rh4YCGBYgBygH/-cI_JLp1FbxWmm0XYc1WdAqj3S7vV4HHLtkcsqpc-uw?preserve_transparency=1&size=2048x1536&size_mode=3' />
						<div>
							<h1>
								<img alt='fullstack-icon' src='https://photos-2.dropbox.com/t/2/AAD1lvpnvPIUGkOiSGRxIEl04iaXQeuUrvlQU7PXqq5J8A/12/275086915/png/32x32/1/_/1/2/pen%20icon.png/EJ2rh4YCGB0gBygH/6MeMS-c5IruXP_G8LIYUVlfN-3A_GlYgKAp-r5C4kWg?preserve_transparency=1&size=2048x1536&size_mode=3' />
								Fullstack Application
							</h1>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
							<a className='link' onClick={this.scrollToLink.bind(this, 'contactUs')}>
								Contact us for an offer
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</section>
				<section className='contact-us' id='contactUs'>
					<img className='stars-bg2' alt='stars-bg2' src='https://photos-4.dropbox.com/t/2/AAC8MMXNlmpy8asWsEThnX5GeUX5xS2pNEEuPv5Mb2VsdQ/12/275086915/jpeg/32x32/1/_/1/2/bg-mountains.jpg/EJ2rh4YCGCAgBygH/cDVJAKBmB_OpBn48kMMBoTXE9iWyeixLL3qVVpzcwhI?size=2048x1536&size_mode=3' />
					<img className='stars-bg2-mobile' alt='stars-bg2-mobile' src='https://photos-5.dropbox.com/t/2/AABQE5QhE0R7XXJ_J4sj-ivcDl7Qr3fG_cFn_r0mGr2yWg/12/275086915/jpeg/32x32/1/_/1/2/contact-bg-mobile.jpg/EJ2rh4YCGD0gBygH/ik13JFkCtfzNUkUY-KIoMkKPZM8pXf1qUgUneoM0skQ?size=2048x1536&size_mode=3' />
					<img className='stars-bg2-small' alt='stars-bg2-small' src='https://photos-4.dropbox.com/t/2/AADKskGt2wkdPf4ERKD8dm0GcM5Hsj49mRVooAV3ZHQB8Q/12/275086915/jpeg/32x32/1/_/1/2/contact-bg-small.jpg/EJ2rh4YCGEYgBygH/8dv2v8vLU0NdDoItzWNfmLQgmypRG7ckn8gZdRCxhik?size=2048x1536&size_mode=3' />
					<div className='content'>
						<h1>Contact Us</h1>
						<p>We will make sure to get back to you as soon as possible</p>
						<input type='text' placeholder='Full Name' onChange={this.inputChange.bind(this, 'name')} />
						<input type='text' placeholder='Email' onChange={this.inputChange.bind(this, 'email')} />
						<textarea placeholder='Your Message' onChange={this.inputChange.bind(this, 'msg')} rows='5'></textarea>
						{this.state.contactSpinner == 'wait'
							? <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
							: this.state.contactSpinner == 'sent'
								? 	<div className='sent'>
										<i className="fa fa-check" aria-hidden="true"></i>
										<p>The message was sent successfully, we will contact you asap</p>
									</div>
								: <button onClick={this.sendMsg.bind(this, 'contactSpinner')} className='general-btn'> Send</button>
						}
					</div>
				</section>
				{/*{<section className='blog'>
					<h1>Blog</h1>
					<p>We are very engaged in the community of blockchain and the cryptocurrency world in general.</p>
					<p>Check out some of the ideas we share!</p>
					<div className='items-container'>
						<div className='single-item'>
							<div className='cropped-img'><img className='blog-img' alt='blog-img-1' src='https://images.pexels.com/photos/541522/pexels-photo-541522.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' /></div>
							<div className='content'>
								<h6>Cryptoprint: Why You Should Use Paper Wallets</h6>
								<p><i className="fa fa-calendar" aria-hidden="true"></i>24 December, 2017</p>
								<p>Through its relatively brief existence, Bitcoin has seen its fair share of controversy.</p>
							</div>
						</div>
						<div className='single-item'>
							<div className='cropped-img'><img className='blog-img' alt='blog-img-1' src='https://images.pexels.com/photos/398532/pexels-photo-398532.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' /></div>
							<div className='content'>
								<h6>Cryptoprint: Why You Should Use Paper Wallets</h6>
								<p><i className="fa fa-calendar" aria-hidden="true"></i>24 December, 2017</p>
								<p>Through its relatively brief existence, Bitcoin has seen its fair share of controversy.</p>
							</div>
						</div>
						<div className='single-item'>
							<div className='cropped-img'><img className='blog-img' alt='blog-img-1' src='https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' /></div>
							<div className='content'>
								<h6>Cryptoprint: Why You Should Use Paper Wallets</h6>
								<p><i className="fa fa-calendar" aria-hidden="true"></i>24 December, 2017</p>
								<p>Through its relatively brief existence, Bitcoin has seen its fair share of controversy.</p>
							</div>
						</div>
					</div>
					<button className='general-btn'>Read More</button>
				</section>}*/}
				<section className='team' id='team'>
					<h1>Meet Our Team</h1>
					<p>Our team is built on friendship and fairness first, and we put our customers ahead of everything. If you work with us, you can be sure that you get the best deliverables possible and at a fair price.</p>
					<div className='items-container'>
						<div className='single-item'>
							<img alt='danny' src='https://photos-5.dropbox.com/t/2/AACFMbTqaVi_CENMqlWAhHIf2ZIDjWxDYuxhi1-DtI5ctg/12/275086915/jpeg/32x32/1/_/1/2/danny.jpg/EJ2rh4YCGDYgBygH/nA6xhXykmSN6xg6ctSshb2pgtC4gVdyxvaM0V5MHcgE?size=2048x1536&size_mode=3' />
							<div className='title'>
								<h6>Daniel Blank</h6>
								<p>Product Manager</p>
							</div>
							<p>Daniel blends his deep knowledge of tech and the blockchain with top notch product and project management skills, ensuring that we deliver amazing products, on time and on budget.</p>
							<ul>
								<li onClick={() => window.open('https://medium.com/@danielblank')}><img alt='medium-icon' src='https://photos-4.dropbox.com/t/2/AAC0bttZ4FUSHoiXorKZ_1VtQmSJX5HsoaA0UEM02XwZtg/12/275086915/png/32x32/1/_/1/2/medium.png/EJ2rh4YCGCcgBygH/K1JWxl03uXKHYVZB4aJbJcstfA8z1wgg1YpN6nKBVCE?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
								<li onClick={() => window.open('https://www.linkedin.com/in/daniel-blank-72166284/')}><img alt='linkedin-icon' src='https://photos-4.dropbox.com/t/2/AAAu50SLGFAxA_ninAOgRZI4IUImrBnnHOVUgaZJb5NqJQ/12/275086915/png/32x32/1/_/1/2/linkedin.png/EJ2rh4YCGCYgBygH/IEZBICKN3m_4yNyRE-AMzXlogaJQnhTNypt0I1om8wc?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
								<li onClick={() => window.open('https://www.quora.com/profile/Daniel-Blank-7')}><img alt='quora-icon' src='https://photos-1.dropbox.com/t/2/AAB8VT5-ZeX0JUKpKjT1YzEv31KmBluSrrqyvztvV6oefQ/12/275086915/png/32x32/1/_/1/2/quora.png/EJ2rh4YCGCggBygH/xOXRcDmDVPHuIhDFuQb_PTzYGqTTgkjOUniDkSvjc_A?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
							</ul>
						</div>
						<div className='single-item'>
							<img alt='axel' src='https://photos-2.dropbox.com/t/2/AAB8Ov_LcuDjtNiYpjNhoX5hfzalX-iHRmKYLLWaxnEGUA/12/275086915/jpeg/32x32/1/_/1/2/axel.jpg/EJ2rh4YCGDkgBygH/igbmNK2rv9epH63jPkQTk56EaaO7rPFCkrN2Knq10VQ?size=2048x1536&size_mode=3' />
							<div className='title'>
								<h6>Roman Axelrod</h6>
								<p>Full Stack Developer</p>
							</div>
							<p>Roman serves as chief software architect and back-end developer. He brings his amazing knowledge of web technologies to ensure that we deliver extremely high quality software to our customers.</p>
							<ul>
							</ul>
						</div>
						<div className='single-item'>
							<img alt='karolis' src='https://photos-4.dropbox.com/t/2/AAC92yH0IHa_9u1UWXgDH2pRFnRYzN_XTLlQmIxYwVbiSg/12/275086915/jpeg/32x32/1/_/1/2/karolis.jpg/EJ2rh4YCGDcgBygH/df-ScH20YneNP1zKMMxsGRyEJaWhZDZBJ2O-1IzT-oI?size=2048x1536&size_mode=3' />
							<div className='title'>
								<h6>Karolis Ramanauskas</h6>
								<p>Full Stack Developer</p>
							</div>
							<p>Karolis is a full-stack developer focused on building complex user interfaces. Karolis brings his unique front-end touch to ensure that our customers enjoy using our deliverables as much as we enjoy making them.</p>
							<ul>
								<li onClick={() => window.open('https://github.com/superkarolis/')}><img alt='github-icon' src='https://photos-2.dropbox.com/t/2/AACinbS95tJMdqO46qNG5GpBo5zLtV9dMrbopP0RG6NNYw/12/275086915/png/32x32/1/_/1/2/github.png/EJ2rh4YCGCUgBygH/cjnYs9P8k0vR0H29Nm3mvRVqcNzaVyyKIWaK05WnGwM?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
								<li onClick={() => window.open('https://medium.com/@karolisram')}><img alt='medium-icon' src='https://photos-4.dropbox.com/t/2/AAC0bttZ4FUSHoiXorKZ_1VtQmSJX5HsoaA0UEM02XwZtg/12/275086915/png/32x32/1/_/1/2/medium.png/EJ2rh4YCGCcgBygH/K1JWxl03uXKHYVZB4aJbJcstfA8z1wgg1YpN6nKBVCE?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
								<li onClick={() => window.open('https://www.linkedin.com/in/karolisram/')}><img alt='linkedin-icon' src='https://photos-4.dropbox.com/t/2/AAAu50SLGFAxA_ninAOgRZI4IUImrBnnHOVUgaZJb5NqJQ/12/275086915/png/32x32/1/_/1/2/linkedin.png/EJ2rh4YCGCYgBygH/IEZBICKN3m_4yNyRE-AMzXlogaJQnhTNypt0I1om8wc?preserve_transparency=1&size=2048x1536&size_mode=3' /></li>
							</ul>
						</div>
						<div className='single-item'>
							<img alt='katy' src='https://photos-1.dropbox.com/t/2/AAAE-xI-erxwEI_KUkT4N6jrve2yw0Lj6PuyT9_YKxo-pg/12/275086915/jpeg/32x32/1/_/1/2/katy.jpg/EJ2rh4YCGDggBygH/N5ynQa5JR6oG4N1AeXLmFMFcYkGpATSoR2QZN7v2hB8?size=2048x1536&size_mode=3' />
							<div className='title'>
								<h6>Katy Vashkevich</h6>
								<p>Front End Developer</p>
							</div>
							<p>Katy is an expert in cutting edge front end technologies. With her design and illustration background and a keen eye for details, she is able to deliver high-quality front end work that amazes customers.</p>
							<ul>
							</ul>
						</div>
					</div>
				</section>
				<section className='footer'>
					<img className='stars-bg3' alt='stars-bg3' src='https://photos-6.dropbox.com/t/2/AAA-5OMt-zp242Lmo1oZV5r_RQNBuK8iHf9s-C_uKWsF_Q/12/275086915/jpeg/32x32/1/_/1/2/bg-footer.jpg/EJ2rh4YCGDogBygH/ofiDaY7plVdCZJ2X9o3SnCOPQIprwTADvH8j4_NOAmQ?size=2048x1536&size_mode=3' />
					<img className='stars-bg3-mobile' alt='stars-bg3' src='https://photos-1.dropbox.com/t/2/AACXiG6GGweNhGpAvVMLSK_ugLIx-oZA8Qc40xsAFZFcyw/12/275086915/jpeg/32x32/1/_/1/2/footer-mobile.jpg/EJ2rh4YCGEMgBygH/6TrDbwJHiqoxuPbCxK3m7cXrOldSJbIVukQISXI4ESs?size=2048x1536&size_mode=3' />
					<img className='stars-bg3-small' alt='stars-bg3' src='https://photos-5.dropbox.com/t/2/AADLCbboqICoSXt0S2OgCOZuQgOUPteP1SswMCBwbAMYgg/12/275086915/jpeg/32x32/1/_/1/2/footer-small.jpg/EJ2rh4YCGEYgBygH/XPOA61VlBspuM1TF51dFgO05DE3TL1M2uyvFxhlAQxk?size=2048x1536&size_mode=3' />
					<div className='content'>
						<h1>We’ve got a lot in store coming</h1>
						<p>Subscribe to be the first updated</p>
						<input type='text' placeholder='Your Email' onChange={this.inputChange.bind(this, 'subscribe')} />
						{this.state.subscribeSpinner == 'wait'
							? <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
							: this.state.subscribeSpinner == 'sent'
								? 	<div className='sent'>
										<p>Thank you for subscribing, you will hear from us soon</p>
										<i className="fa fa-check" aria-hidden="true"></i>
									</div>
								: <button onClick={this.sendMsg.bind(this, 'subscribeSpinner')} className='general-btn'>Subscribe Now</button>
						}
						<p>2018 - © All rights reserved Workshopp</p>
					</div>
				</section>
			</div>
		)
	};
}