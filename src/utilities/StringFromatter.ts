export const formatPhone = (phone: string) => `${phone.slice(0,4)} (${phone.slice(4,6)}) ${phone.slice(6, 9)} ${phone.slice(9)}`

export const textToCapitalizeCase = (text: string) => text.replace(/^\w/, c => c.toUpperCase());
