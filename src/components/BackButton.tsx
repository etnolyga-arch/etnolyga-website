'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function BackButton() {
  const router = useRouter();
  return (
    <Button variant="outline" onClick={() => router.back()}>
      <Image src="/images/ui/arrows/back.png" alt="" width={20} height={20} className="inline-block mr-2" />
      Grįžti
    </Button>
  );
}
