export const handleChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  payload: T,
  setPayload: (value: React.SetStateAction<T>) => void
) => {
  const { name, value } = e.target;

  setPayload({ ...payload, [name]: value });
};
