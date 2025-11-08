import { Card, Skeleton, Badge, Group, Button } from "@mantine/core";
import "@mantine/core/styles.css";

function LoadingCard() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder pos="relative">
            <Card.Section>
                <Badge pos="absolute" color="pink" sx={{ top: 10, right: 10 }}>
                    <i className="fa-regular fa-heart"></i>
                </Badge>
                <Skeleton height={160} /> {/* image o‘rni */}
                <Group mt="xs" spacing="xs">
                    <Skeleton height={20} width={120} radius="xl" />
                    <Skeleton height={20} width={100} radius="xl" />
                    <Skeleton height={20} width={80} radius="xl" />
                </Group>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Skeleton height={16} width="60%" />
            </Group>

            <Skeleton height={10} mt="xs" width="90%" />
            <Skeleton height={10} mt="xs" width="80%" />

            <Button color="blue" fullWidth mt="md" radius="md" disabled>
                <Skeleton height={20} width="40%" />
            </Button>
        </Card>
    );
}

export default LoadingCard;
