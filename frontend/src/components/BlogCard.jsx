import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BlogCard({ blog }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{blog.title}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>{blog.content}</Typography>
        <Typography variant="caption" color="text.secondary">
          By {blog.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
