---
title: "Contact Info"
date: 2026-08-14T10:20:36+0200
draft: false
featured_image: ""
---

I am always open to thoughtful conversations, collaborations, project proposals, or questions about my work.

### Get in Touch

* **Email:** [nicolas.greenwood@outlook.com](mailto:nicolas.greenwood@outlook.com)

### Social & Code

* **GitHub:** [github.com/nicolasGreenwood](https://github.com/nicolasGreenwood)
* **Instagram:** [@nicolas_greenwood](https://www.instagram.com/nicolas_greenwood/)
* **Codepen:** [@nickrg](https://codepen.io/nickrg)
* **Khan Academy:** [@nickrg](https://www.khanacademy.org/profile/nickrg/)


---

## Freelancing and Developer Services

If you're looking for a way to contact me regarding a freelance project, please send me an email at [`nicolas.greenwood@outlook.com`](mailto:nicolas.greenwood@outlook.com). I will endeavor to get back to you within 48 hours.

To learn more about the developer services I provide, please visit my [**Programming**](/programming/) page. I am usually open to new projects.

---

## Send Me an Encrypted Email (beta)

1. ### Install/configure OpenPGP:
    You can work with emails encrypted with OpenPGP via an PGP-compatible email client or service or by encrypting/decrypting emails manually via the CLI. If your email client supports PGP encryption, follow their instructions. 

    If you'd like to use the CLI method, see [**gpg4win.org**](https://www.gpg4win.org) for Windows or install with [**Homebrew**](https://formulae.brew.sh/formula/gnupg) if you're on MacOS. If you're using Linux, GnuPG is available through most Linux distributions' package managers.

    The rest of this guide assumes you are using the CLI method of email encryption.

2. ### Download my public key

    Download it here: <a href="/nicolas-key.asc" download style="text-decoration: underline;">nicolas-key.asc</a>

    or copy it raw and paste into an .asc file:

    ```bash
    -----BEGIN PGP PUBLIC KEY BLOCK-----

    mDMEapWHaBYJKwYBBAHaRw8BAQdAnNhCmN9FoIVSiSTDaIuv0GluWmluqAF4p1L1
    xjyeM9m0QU5pY29sYXMgR3JlZW53b29kIChQb2V0IGFuZCBkZXYuKSA8bmljb2xh
    cy5ncmVlbndvb2RAb3V0bG9vay5jb20+iK8EExYKAFcWIQRnADYIvEeEnUF0jmK6
    rniljX/piwUCapWHaBsUgAAAAAAEAA5tYW51MiwyLjUrMS4xMiwwLDMCGwMFCwkI
    BwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQuq54pY1/6Yup1gEAgIJhKJTciA8h
    r0H9sckandNWE0DgKA7/7DRUqONrxr8BANVAwQvEPfziOu9wWrauoOECJmPFYnms
    sM2wFO+V3/oOuDgEapWHaBIKKwYBBAGXVQEFAQEHQL1uw9auIV3x1FAi207/2ylD
    FTjIYLr9FzQY+6y5jKwtAwEIB4iTBBgWCgA8FiEEZwA2CLxHhJ1BdI5iuq54pY1/
    6YsFAmqVh2gbFIAAAAAABAAObWFudTIsMi41KzEuMTIsMCwzAhsMAAoJELqueKWN
    f+mLe6EA/RUwa2FPqF2c5mq6Hv8XtmKWpXdPOiaseagbT6aZSA5XAPUQP8I8+3v1
    LMvHXcr7BqEMTA92ra+ujnU+Rr0UDysL
    =eMXg
    -----END PGP PUBLIC KEY BLOCK-----
    ```

3. ### Import my public key
    Run this command to import my key:

    ```bash
    gpg --import nicolas-key.asc
    ```

4. ### Verify my public key
    To verify you have the correct key, run this command to extract the fingerprint and compare with the one shown here. If they match, you have the correct key.

    ```bash
    gpg --fingerprint nicolas.greenwood@outlook.com
    ```

    **My OpenPGP Fingerprint:**

    ```bash
    6700 3608 BC47 849D 4174  8E62 BAAE 78A5 8D7F E98B
    ```

5. ### Prepare and send your email
    Write your message and save it in a .txt file. Then run this command to encrypt your message:

    ```bash
    gpg --armor --encrypt --recipient nicolas.greenwood@outlook.com message.txt
    ```

    This will create a file looking something like `message.txt.asc`. Copy the text from that file and send it to [nicolas.greenwood@outlook.com](nicolas.greenwood@outlook.com) as a normal email. **Note: this only encrypts your message content. It does not encrypt your normal message metadata and subject line.**

That's all! You have just successfully sent an encrypted email. Only the holder of my private key can decrypt it by running a simple command. Useless, but cool, right?

If your email service provider supports PGP encryption natively, encrypting/decrypting emails is a lot easier, but using the CLI is a lot more fun.