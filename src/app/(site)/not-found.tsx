import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center-page" data-theme="dark">
      <div>
        <h1>404</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link className="btn btn--solid" href="/">Lorem ipsum</Link>
      </div>
    </div>
  );
}
