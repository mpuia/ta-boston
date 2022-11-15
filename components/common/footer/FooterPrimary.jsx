import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="Track my Order">
              Track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free Returns*">
              Free returns*
            </Link>
          </li>

        <li>
            <Link href="/" title="My Account">
              My Account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to Store">
              Ship to Store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift Card">
              Gift Card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online Only">
              Online Only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips & Tricks">
              Tips & Tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty Programs">
              Loyalty Programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign Up to the Simons">
              Sign Up to the Simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              My Account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="FAQ">
              FAQ
            </Link>
          </li>
          </ul>

          <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About us">
              About us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Story">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our Private Labels">
              Our Private Labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
      <p><span>Thread Affair</span> Milano</p>
      <p>Largo Augusto 3, Milano, 20122, Milano, IT</p>
      <p>TEL: 0039 02 760 003 66</p>
      <a href="mailto:office@thread-affair.com">office@thread-affair.com</a>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+0741123456" title="Call us">
            <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a href="tel:+0741123456" title="Text us">
            <i className="fa-solid fa-comment"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="tel:+0741123456" title="Email us">
            <i className="fa-solid fa-envelope"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
