import socials from "@/entities/social-links";
import Link from "next/link";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => (
        <Link href={item.path} key={i} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
