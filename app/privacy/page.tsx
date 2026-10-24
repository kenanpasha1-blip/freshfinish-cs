import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import StructuredData from "@/components/StructuredData";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/privacy";
const UPDATED = "24 October 2026";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Fresh Finish Cleaning Solutions Ltd collects, uses and protects personal information on this website and in the Fresh Finish client portal.",
  path: PATH,
});

const h2 = "text-xl font-semibold text-brand-900 mt-10 mb-3";

export default function Page() {
  return (
    <>
      <StructuredData
        data={breadcrumbJsonLd([
          { name: "Home", url: site.url },
          { name: "Privacy", url: `${site.url}${PATH}` },
        ])}
      />

      <PageHero
        eyebrow="Privacy"
        heading="Privacy policy"
        intro={`How we collect, use and protect your information. Last updated ${UPDATED}.`}
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Privacy" }]}
      />

      <Section>
        <div className="max-w-3xl text-ink-700 leading-relaxed space-y-4">
          <h2 className={h2}>Who we are</h2>
          <p>
            This website and the Fresh Finish client portal are run by Fresh
            Finish Cleaning Solutions Ltd, a company registered in England and
            Wales (company number 15445185), registered office 207 Crescent
            Road, Barnet, England, EN4 8SB. We are the controller of the
            personal information described here.
          </p>
          <p>
            Questions about your information go to{" "}
            <a className="text-brand-700 underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>{" "}
            or {site.contact.phoneDisplay}.
          </p>

          <h2 className={h2}>What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Quote and contact requests:</strong> your name, email,
              phone number, the service you are interested in, your location or
              postcode and anything you write in the message box.
            </li>
            <li>
              <strong>Bookings and cleans:</strong> the property address,
              access details you give us, the date and type of clean, before
              and after photos, cleaning reports and invoices.
            </li>
            <li>
              <strong>Client portal accounts:</strong> the name and email of
              each person given a login, and what they book or view in the
              portal.
            </li>
            <li>
              <strong>Emails and calls:</strong> messages you send us and our
              replies.
            </li>
            <li>
              <strong>Website visits:</strong> which page was viewed, the
              website you came from, your country and whether you used a phone,
              tablet or computer. We do not use cookies, we do not store your
              IP address and we do not use any third party tracking or
              advertising tools on this website.
            </li>
          </ul>

          <h2 className={h2}>Why we use it, and our lawful basis</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To answer your enquiry, quote, book and carry out cleans, send
              reports and invoices and run your client portal. This is needed
              to take steps towards, and to perform, a contract with you or
              your organisation.
            </li>
            <li>
              To keep accounting and tax records. This is a legal obligation.
            </li>
            <li>
              To contact businesses about our services, to keep the website and
              portal secure and working, and to understand which pages are
              useful. These are our legitimate interests, and you can object
              or opt out at any time (every marketing email includes an opt
              out).
            </li>
          </ul>

          <h2 className={h2}>Who we share it with</h2>
          <p>
            We never sell your information. We share it only with the
            providers that help us run the business, under contracts that
            require them to protect it:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vercel, which hosts this website and the client portal.</li>
            <li>Supabase, which stores portal data on servers in London.</li>
            <li>Google Workspace, for our email.</li>
            <li>Resend, which sends emails from the website and portal.</li>
            <li>
              Hetzner, which keeps encrypted backup copies on servers in
              Germany.
            </li>
            <li>
              Anthropic, whose AI helps us sort incoming email and draft
              replies, which a person checks before anything is sent.
            </li>
          </ul>
          <p>
            The cleaner assigned to your job sees the details needed to do it,
            such as the address and access notes. We also share information
            where the law requires it.
          </p>
          <p>
            Some of these providers are based outside the UK. Where your
            information leaves the UK, it is protected by UK adequacy
            regulations or by the UK approved contract terms.
          </p>

          <h2 className={h2}>How long we keep it</h2>
          <p>
            Enquiries that do not lead to work are kept for up to two years.
            Job records, photos and reports are kept while you are a client and
            for as long as they may be needed to resolve a question about a
            clean. Invoices and accounting records are kept for six years, as
            UK tax law requires. After that we delete them.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p>
            You can ask for a copy of your information, ask us to correct or
            delete it, object to how we use it, ask us to restrict its use or
            ask for it in a portable format. Email{" "}
            <a className="text-brand-700 underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>{" "}
            and we will reply within one month.
          </p>
          <p>
            If you are unhappy with how we handle your information, please tell
            us first. You can also complain to the Information
            Commissioner&rsquo;s Office at{" "}
            <a className="text-brand-700 underline" href="https://ico.org.uk/make-a-complaint/">
              ico.org.uk
            </a>
            .
          </p>

          <h2 className={h2}>Security</h2>
          <p>
            The portal requires a login, each client sees only their own
            properties, photo links are private, and backups are encrypted.
          </p>

          <h2 className={h2}>Changes</h2>
          <p>
            If we change this policy we will update the date at the top of
            this page.
          </p>
        </div>
      </Section>
    </>
  );
}
