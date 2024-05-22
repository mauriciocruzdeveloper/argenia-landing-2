import { notFound } from 'next/navigation';

type Messages = {
  [key: string]: string;
};

export async function generateMetadata(locale: string) {
  let messages: Messages;
  try {
    messages = await import(`../locales/${locale}/common.json`);
  } catch (error) {
    notFound();
  }

  return {
    props: {
      messages,
    },
  };
}
