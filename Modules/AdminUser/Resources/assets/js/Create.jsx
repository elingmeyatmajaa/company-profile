import Breadcrumb from "@/Components/Breadcrumb";
import Container from "@/Components/Container";
import Master from "@/Layouts/Master";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import react from "react";
import Grid from "@/Components/Grid";
import Form from "@/Components/Form";
import Card from "@/Components/Card";
import FormGroup from "@/Components/FormGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import FileForm from "@/Components/FileForm";
import TextForm from "@/Components/Forms/TextForm";
import HtmlForm from "@/Components/Forms/HtmlForm";
import Button from "@/Components/Buttons/Button";
import PasswordForm from "@/Components/Forms/PasswordForm";
import CheckGroup from "@/Components/Forms/CheckGroup";
import CheckForm from "@/Components/Forms/CheckForm";
import { includes, xor } from "lodash";
import { router, useForm } from "@inertiajs/react";

export default function Create({ errors, referer, roles }) {
    const { data, setData, reset } = useForm({
        name: '',
        email: '',
        password: '',
        roles: []
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(_route('admin.user.store'), data, {
            onSuccess: () => {
                saySomething();
                reset();
            }
        })
    }
    return (
        <>
            <Container>
            <Breadcrumb
                title={__('User')}
                items={[
                    { name: __('Home'), href: "_route('admin.dashboard.index')", current: false },
                    { name: __('User'), href: _route('admin.user.index'), current: false },
                    { name: __('Create'), href: "_route('admin.user.create')", current: true },
                ]}
            />
            <Grid>
                <Grid.Span1>
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    <Card.TitleText className="text-2xl mb-0">{__('User Create Form')}</Card.TitleText>
                                    <Card.TitleDescription className="mt-1 max-w-2xl text-sm text-gray-500">{__('Please fill form below')}</Card.TitleDescription>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FormGroup>
                                    <FormLabel>{__('Name')}</FormLabel>
                                    <TextForm
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        error={errors.name}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>{__('Email')}</FormLabel>
                                    <TextForm
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        error={errors.email}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>{__('Password')}</FormLabel>
                                    <PasswordForm
                                        value={data.password}
                                        onChange={e => setData('password', e.target.value)}
                                        error={errors.password}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>{__('Roles')}</FormLabel>
                                    <CheckGroup
                                        error={errors.roles}
                                    >
                                        <Grid>

                                            {roles.map((role, index) => (
                                                <Grid.Span1>
                                                    <CheckForm
                                                        name={`roles[${index}]`}
                                                        id={`roles-${role.id}`}
                                                        checked={includes(data.roles, role.id)}
                                                        onChange={e => setData('roles', xor(data.roles, [role.id]))}
                                                    >
                                                        {role.name}
                                                    </CheckForm>
                                                </Grid.Span1>

                                            ))}

                                        </Grid>
                                    </CheckGroup>
                                </FormGroup>
                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <Button.Light
                                            className="mr-3"
                                            href={referer}
                                        >
                                            {__('Cancel')}
                                        </Button.Light>
                                        <Button
                                            type="submit"
                                        >
                                            {__('Save')}
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

Create.layout = (page) => <Master children={page} />;
