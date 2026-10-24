import { useEffect } from "react";

const sections = [
  {
    title: "Information collected",
    content: (
      <>
        <p>
          If you submit a lead form shown on Meta (such as a Facebook or
          Instagram Instant Form), the form may collect the information you
          choose to provide. This can include your name, email address, and
          phone number when those fields are included and you complete them.
          The form may also ask for other details; the specific fields shown
          on the form are the information requested.
        </p>
      </>
    ),
  },
  {
    title: "How information is used",
    content: (
      <p>
        Information submitted through a lead form is used to review and respond
        to your inquiry, contact you using the details you provided, and
        continue the conversation about your request. It will not be used for
        other purposes unless those purposes are explained to you and
        appropriately permitted.
      </p>
    ),
  },
  {
    title: "Storage, protection, retention, and deletion",
    content: (
      <>
        <p>
          Lead information is stored in{" "}
          <strong>[identify the actual storage systems and locations]</strong>.
          Access is limited to{" "}
          <strong>[identify who can access the information]</strong>. The
          safeguards used to protect it are{" "}
          <strong>[describe only verified technical and organizational
          safeguards]</strong>.
        </p>
        <p>
          Information is retained for{" "}
          <strong>[state the actual retention period or deletion criteria]</strong>
          . It is deleted from{" "}
          <strong>[identify systems and backups, and state the actual deletion
          timeline]</strong>{" "}
          when that period ends or when deletion is otherwise appropriate.
        </p>
      </>
    ),
  },
  {
    title: "Meta and other service providers",
    content: (
      <>
        <p>
          Meta provides the platform on which the lead form is displayed and
          processes information submitted through its services under its own
          terms and privacy policy. See{" "}
          <a
            href="https://www.facebook.com/privacy/policy/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#3A4A78] underline decoration-[#596A99]/50 underline-offset-4 hover:text-[#596A99]"
          >
            Meta’s Privacy Policy
          </a>{" "}
          for information about Meta’s practices.
        </p>
        <p>
          Information may also be handled by service providers used to receive,
          store, or respond to leads. The providers currently involved are{" "}
          <strong>[list each actual provider and its role, or state that there
          are none]</strong>. Do not publish this section until the complete
          lead-data flow and provider list have been verified.
        </p>
      </>
    ),
  },
  {
    title: "Your requests",
    content: (
      <p>
        You can request access to, correction of, or deletion of information
        you submitted. Contact{" "}
        <a
          href="mailto:[privacy-contact-email]"
          className="font-semibold text-[#3A4A78] underline decoration-[#596A99]/50 underline-offset-4 hover:text-[#596A99]"
        >
          [privacy-contact-email]
        </a>{" "}
        and describe your request. Please include enough information for us to
        locate the submission; do not email sensitive information that is not
        needed to identify it. Requests will be handled subject to applicable
        requirements and any information we are required to retain.
      </p>
    ),
  },
  {
    title: "Privacy contact",
    content: (
      <p>
        For privacy questions or requests, contact{" "}
        <a
          href="mailto:[privacy-contact-email]"
          className="font-semibold text-[#3A4A78] underline decoration-[#596A99]/50 underline-offset-4 hover:text-[#596A99]"
        >
          [privacy-contact-email]
        </a>
        . Replace this placeholder with a monitored contact address before
        publishing.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Altaf Shaikh";
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F0E4B8] px-4 py-8 text-[#26365F] sm:px-6 sm:py-12">
      <main className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D9CC9C] bg-white/40 px-5 text-sm font-semibold text-[#3A4A78] transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3A4A78]"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </a>

        <header className="mt-10 border-b border-[#D9CC9C] pb-8 sm:mt-14 sm:pb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#596A99]">
            Meta Lead Ads
          </p>
          <h1 className="text-4xl font-black tracking-[-0.05em] text-[#26365F] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#596A99]">
            Effective date: <strong>[Month DD, YYYY]</strong>
          </p>
        </header>

        <aside
          aria-label="Publication reminder"
          className="mt-7 rounded-2xl border border-[#B8863B]/30 bg-[#FFF8E8] p-5 text-sm leading-6 text-[#604A27] sm:p-6"
        >
          <p className="font-bold">Draft — details must be verified</p>
          <p className="mt-1">
            Complete every bracketed placeholder and verify the actual
            collection, storage, retention, deletion, and provider practices
            before publishing this policy.
          </p>
        </aside>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {sections.map(({ title, content }, index) => (
            <section
              key={title}
              className="rounded-2xl border border-[#D9CC9C] bg-white/45 p-5 sm:p-7"
            >
              <h2 className="text-xl font-bold tracking-tight text-[#26365F] sm:text-2xl">
                <span className="mr-3 text-sm font-semibold text-[#8790B1]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#46577C] sm:text-base">
                {content}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-[#596A99] sm:mt-10">
          This page is a template and is not a statement that any particular
          legal standard or certification applies. Confirm it reflects the
          project’s actual data practices before making it available to users.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
