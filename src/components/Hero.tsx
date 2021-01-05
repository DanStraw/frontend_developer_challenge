import React from 'react';
import Image from 'next/image';

export default function Hero({ src }) {
    return <Image src={src} width={864} height={864} className="rounded-full border border-r-4 flex border-gray-100" />;
}