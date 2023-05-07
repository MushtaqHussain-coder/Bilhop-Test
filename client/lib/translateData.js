const encodeTexts = async (texts) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/translate/normal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ texts }),
  });

  const data = await response.json();
  return data.data;
};

const decodeTexts = async (texts) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/translate/rovarsprak`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ texts }),
  });

  const data = await response.json();
  return data.data;
};

export { encodeTexts, decodeTexts };
