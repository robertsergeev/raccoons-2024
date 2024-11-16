import "./Select.css"

const Select = ({options, defaultValue, onChange, value}) => {

    const handleOnChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <select
            value={value}
            onChange={handleOnChange}
            className='select'
        >
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>
    );
};

export default Select;