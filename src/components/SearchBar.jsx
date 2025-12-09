import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar({ value, onChange }) {

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="search-bar-wrapper d-flex justify-content-center mb-4">
      <InputGroup className="search-bar" style={{ maxWidth: "650px" }}>

        <InputGroup.Text 
          id="search-label"
          className="search-label fw-semibold"
        >
          Search
        </InputGroup.Text>

        <Form.Control
          aria-label="Search destinations"
          aria-describedby="search-label"
          className="search-input"
          type="search"
          placeholder="Type a destination or keyword..."
          value={value}
          onChange={handleChange}
        />

      </InputGroup>
    </div>
  );
}
