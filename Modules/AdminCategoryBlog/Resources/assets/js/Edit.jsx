import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import Master from "@/Layouts/Master";
import _route from "@/helpers/_route";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import __ from "@/helpers/__";
import saySomething from "@/helpers/saySomething";

export default function Edit({categoryBlogs, referer, errors }) {
    const { data, setData } = useForm({
        ...categoryBlogs.data,
        referer: referer,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(_route("admin.category-blog.update", data.id), data, {
            onSuccess: () => {
                saySomething();
            },
        });
    };
    return (
        <>
            <Container>
            <Breadcrumb
                    title={__("Edit Category Blog")}
                    items={[
                        {
                            name: __("Home"),
                            href: "_route('admin.dashboard.index')",
                            current: false,
                        },
                        {
                            name: __("Category Blog"),
                            href: _route("admin.category-blog.index"),
                            current: false,
                        },
                        {
                            name: __("Edit"),
                            href: _route("admin.category-blog.edit", data),
                            current: true,
                        },
                    ]}
                />
                <Grid>
                    <Grid.Span1>
                        <Form 
                            method={"PUT"}
                        onSubmit={handleSubmit}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                   
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    

                                    <FormGroup>
                                        <FormLabel>{__("Name")}</FormLabel>

                                        <TextForm
                                            name={"name"}
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            error={errors.name}
                                        />
                                    </FormGroup>

                                    
                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <Button.Light
                                                className="mr-3"
                                                href={referer}
                                            >
                                                {__("Cancel")}
                                            </Button.Light>
                                            <Button type="submit">
                                                {__("Update")}
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Grid.Span1>
                </Grid>
            </Container>
        </>
      
    );
}

Edit.layout = (page) => <Master children={page} />;
