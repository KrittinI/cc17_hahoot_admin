
export default function TextArea({ name, value, placeholder, onChange, rows = 10 }) {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
            onChange={onChange}
            value={value}
            className={`w-full px-3 py-1.5
                border rounded-md focus:outline-none focus:ring-2 
            border-gray-300 focus:border-blue-500 focus:ring-blue300
            resize-none`}
        >
        </textarea>

    )
}
