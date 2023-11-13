const InputField = ({ type, name, placeholder }: any) => {
	return (
		<input
			className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all duration-300"
			type={type}
			name={name}
			placeholder={`Your ${placeholder}`}
		/>
	);
};

export default InputField;
