
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const bottomVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

/* ================= FOOTER ================= */

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Brand */}
        <FooterCol variants={itemVariants}>
          <Logo>Dr. Effty Rahman</Logo>
          <Description>
            Providing trusted medical care with compassion,
            professionalism, and dedication to your health.
          </Description>
        </FooterCol>

        {/* Get A Diagnosis */}
        <FooterCol variants={itemVariants}>
          <FooterTitle>Get A Diagnosis</FooterTitle>
          <LinkList>
            <FooterLink href="/appointment">
              Book Appointment
            </FooterLink>
            <FooterLink href="/contact">
              Ask a Question
            </FooterLink>
            <FooterLink href="/contact">
              Medical Consultation
            </FooterLink>
          </LinkList>
        </FooterCol>

        {/* Contact Us */}
        <FooterCol variants={itemVariants}>
          <FooterTitle>Contact Us</FooterTitle>

          <ContactLine>
            <FaEnvelope />
            <FooterLink href="mailto:info@example.com">
              info@example.com
            </FooterLink>
          </ContactLine>

          <ContactLine>
            <FaPhone />
            <FooterLink href="tel:+93000000000">
              +93 000 000 000
            </FooterLink>
          </ContactLine>

          <ContactLine>
            <FaMapMarkerAlt />
            <span>Kabul, Afghanistan</span>
          </ContactLine>
        </FooterCol>

        {/* Quick Links */}
        <FooterCol variants={itemVariants}>
          <FooterTitle>Quick Links</FooterTitle>
          <LinkList>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/gallery">Gallery</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </LinkList>
        </FooterCol>

        {/* Follow Us */}
        <FooterCol variants={itemVariants}>
          <FooterTitle>Follow Us</FooterTitle>

          <Description>
            Follow us on social media for updates and health information.
          </Description>

          <SocialIcons>
            <SocialIcon
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              $iconColor="#1877F2"
              aria-label="Facebook"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaFacebookF />
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              $iconColor="#E1306C"
              aria-label="Instagram"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaInstagram />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              $iconColor="#0A66C2"
              aria-label="LinkedIn"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaLinkedinIn />
            </SocialIcon>

            <SocialIcon
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              $iconColor="#FF0000"
              aria-label="YouTube"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
        </FooterCol>
      </FooterContainer>

      <FooterBottom
        as={motion.div}
        variants={bottomVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Copyright>
          © {new Date().getFullYear()} Dr. Khalid Zadran. All rights reserved.
        </Copyright>

        <BottomLinks>
          <FooterLink href="/privacy-policy">
          Prepeard By
          </FooterLink>
          <FooterLink href="/terms">
            Tahmina Anwari
          </FooterLink>
        </BottomLinks>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;

/* ================= STYLES ================= */

const FooterWrapper = styled.footer`
  width: 100%;
  margin: 40px auto 0;
  padding: 42px 30px 18px;
  box-sizing: border-box;
  background: #f8fbff;
  border-top: 1px solid #e3eaf2;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 30px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 35px 30px;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 24px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const FooterCol = styled(motion.div)`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.h3`
  margin: 0 0 16px;
  color: #1769aa;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.4;
`;

const FooterTitle = styled.h4`
  margin: 3px 0 18px;
  color: #173b67;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
`;

const Description = styled.p`
  margin: 0;
  color: #667085;
  font-size: 12px;
  line-height: 1.9;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const FooterLink = styled.a`
  color: #667085;
  font-size: 12px;
  line-height: 1.6;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: #1769aa;
    transform: translateX(3px);
  }
`;

const ContactLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 13px;
  color: #667085;
  font-size: 12px;
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    color: #1769aa;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.$iconColor};
  background: #ffffff;
  border: 1px solid #dbe5f0;
  border-radius: 10px;

  font-size: 17px;
  text-decoration: none;
  box-sizing: border-box;
  transition: border-color 0.25s ease, border-radius 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: ${(props) => props.$iconColor};
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(23, 105, 170, 0.12);
  }
`;

const FooterBottom = styled(motion.div)`
  width: 100%;
  max-width: 1250px;
  margin: 36px auto 0;
  padding-top: 18px;

  border-top: 1px solid #e3eaf2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: #8490a2;
  font-size: 11px;
  line-height: 1.7;
`;

const BottomLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
`;
