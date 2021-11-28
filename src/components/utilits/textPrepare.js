const textMaxLength = 300;

const textPrepare = (
  text,
  handlerSet
) => {
  if (!text) return '';
  if (text.length > textMaxLength) {
    handlerSet(true);
    return `${text.slice(0, textMaxLength)}...`;
  }
  return text;
};

export default textPrepare;
