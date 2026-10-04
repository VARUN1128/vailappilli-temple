import type { Metadata } from "next";
import { Noto_Serif_Malayalam, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";

const notoSerifMalayalam = Noto_Serif_Malayalam({
  subsets: ["malayalam", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-malayalam",
  display: "swap",
});

const notoSansMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-malayalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം | പെരുമ്പിള്ളി, എറണാകുളം",
  description:
    "എറണാകുളം ജില്ലയിലെ മുളന്തുരുത്തി പെരുമ്പിള്ളി ഗ്രാമത്തിൽ സ്ഥിതിചെയ്യുന്ന പുരാതനമായ വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രത്തിന്റെ ഔദ്യോഗിക വിവരങ്ങൾ. ദർശന സമയം, വഴിപാടുകൾ, പൂജാക്രമങ്ങൾ, വാർഷിക ഉത്സവവിശേഷങ്ങൾ.",
  keywords: [
    "വൈലപ്പിള്ളി ക്ഷേത്രം",
    "ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
    "പെരുമ്പിള്ളി ക്ഷേത്രം",
    "മുളന്തുരുത്തി ക്ഷേത്രം",
    "എറണാകുളം ക്ഷേത്രങ്ങൾ",
    "Vailappilly Temple",
    "Sree Krishna Swamy Temple Perumpilly",
    "Mulanthuruthy Temples",
  ],
  authors: [{ name: "വൈലപ്പിള്ളി ക്ഷേത്ര ഭരണസമിതി" }],
  openGraph: {
    title: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം | പെരുമ്പിള്ളി, എറണാകുളം",
    description:
      "ഭക്തിയുടെ പാരമ്പര്യം തലമുറകളിലൂടെ കാത്തുസൂക്ഷിക്കുന്ന ശാന്തസുന്ദരമായ ശ്രീകൃഷ്ണസന്നിധി. ദർശന സമയവും വഴിപാടു വിവരങ്ങളും.",
    url: "https://vailappillykshethram.org",
    siteName: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
    locale: "ml_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം",
    description:
      "പെരുമ്പിള്ളി, മുളന്തുരുത്തി, എറണാകുളം - ഔദ്യോഗിക ആത്മീയ വിവരങ്ങൾ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    name: "വൈലപ്പിള്ളി ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം (Vailappilly Sree Krishna Swamy Kshethram)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Perumpilly",
      addressLocality: "Mulanthuruthy",
      addressRegion: "Ernakulam, Kerala",
      postalCode: "682314",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.9076",
      longitude: "76.37684",
    },
    url: "https://vailappillykshethram.org",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <html
      lang="ml"
      className={`${notoSerifMalayalam.variable} ${notoSansMalayalam.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-temple-ivory text-temple-text antialiased selection:bg-temple-gold/30">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
