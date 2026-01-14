import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    customerName: "",
    phone: "",
    title: "",
    description: "",
    assignedTo: "",
    customerId: "",
    status: "todo",
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
  });

  const [errors, setErrors] = useState({});
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.customerName)
      newErrors.customerName = "Customer Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.assignedTo) newErrors.assignedTo = "Assigned To is required";
    if (!formData.customerId) newErrors.customerId = "Customer ID is required";
    if (!formData.status) newErrors.status = "Status is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const updatedFormData = {
        ...formData,
        updatedAt: new Date().toISOString().slice(0, 10),
        id: editingId || Date.now(), // simple ID
      };
      if (editingId !== null) {
        setTodos(
          todos.map((todo) => (todo.id === editingId ? updatedFormData : todo))
        );
        setEditingId(null);
      } else {
        setTodos([...todos, updatedFormData]);
      }
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "user",
        customerName: "",
        phone: "",
        title: "",
        description: "",
        assignedTo: "",
        customerId: "",
        status: "todo",
        createdAt: new Date().toISOString().slice(0, 10),
        updatedAt: new Date().toISOString().slice(0, 10),
      });
    }
  };

  const handleView = (todo) => {
    alert(`Details:\n${JSON.stringify(todo, null, 2)}`);
  };

  const handleEdit = (todo) => {
    setFormData(todo);
    setEditingId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "user",
      customerName: "",
      phone: "",
      title: "",
      description: "",
      assignedTo: "",
      customerId: "",
      status: "todo",
      createdAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    });
    setEditingId(null);
    setErrors({});
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Create Todo</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
          {errors.customerName && (
            <span className="error">{errors.customerName}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="assignedTo">Assigned To</label>
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
          />
          {errors.assignedTo && (
            <span className="error">{errors.assignedTo}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
          />
          {errors.customerId && (
            <span className="error">{errors.customerId}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          {errors.status && <span className="error">{errors.status}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At</label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt.slice(0, 10)}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatedAt">Updated At</label>
          <input
            type="date"
            id="updatedAt"
            name="updatedAt"
            value={formData.updatedAt.slice(0, 10)}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          {editingId !== null ? "Update" : "Submit"}
        </button>
        {editingId !== null && (
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>
      {todos.length > 0 && (
        <div className="todo-table-container">
          <h3>Todo Details</h3>
          <table className="todo-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Customer</th>
                <th>Title</th>
                <th>Assign To</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.name}</td>
                  <td>{todo.email}</td>
                  <td>{todo.role}</td>
                  <td>{todo.customerName}</td>
                  <td>{todo.title}</td>
                  <td>{todo.assignedTo}</td>
                  <td>{todo.status}</td>
                  <td>{todo.createdAt}</td>
                  <td>{todo.updatedAt}</td>
                  <td>
                    <button onClick={() => handleView(todo)}>View</button>
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Todo;
