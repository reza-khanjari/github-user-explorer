interface UserAvatar {
  url: string;
  className?: string;
}

export default function UserAvatar({ url, className }: UserAvatar) {
  const src = url ? url : "/avatar.jpg";
  return (
    <div
      className={`border-primary flex size-18 overflow-hidden rounded-full leading-none shadow-[0_0_8px_3px_#a486ff] ${className}`}
    >
      <img className="size-full" src={src} alt="user-avater" />
    </div>
  );
}
