import Breadcrumb from "@/Components/Breadcrumb";
import Button from "@/Components/Buttons/Button";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import Form from "@/Components/Form";
import FormGroup from "@/Components/FormGroup";
import CheckForm from "@/Components/Forms/CheckForm";
import CheckGroup from "@/Components/Forms/CheckGroup";
import FormLabel from "@/Components/Forms/FormLabel";
import PasswordForm from "@/Components/Forms/PasswordForm";
import TextForm from "@/Components/Forms/TextForm";
import Grid from "@/Components/Grid";
import __ from "@/helpers/__";
import _route from "@/helpers/_route";
import saySomething from "@/helpers/saySomething";
import react from "react";
import { router, useForm } from "@inertiajs/react";
import { includes, xor } from "lodash";
import Master from "@/Layouts/Master";

export default function Edit({ user, referer, errors, roles }) {

    const { data, setData } = useForm({
        ...user.data,
        roles : user.data.roles.map(role => role.id),
        referer: referer
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        router.put(_route('admin.user.update', data.id), data, {
            onSuccess: () => {
                saySomething();
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
                    { name: __('Edit'), href: _route('admin.user.edit', data), current: true },
                ]}
            />
            <Grid>
                <Grid.Span1>
                    <Form
                        method={'PUT'}
                        onSubmit={handleSubmit}
                    >

                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    <Card.TitleText className="text-2xl mb-0">{__('User Edit Form')}</Card.TitleText>
                                    <Card.TitleDescription className="mt-1 max-w-2xl text-sm text-gray-500">{__('Please fill form below')}</Card.TitleDescription>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FormGroup>
                                    <FormLabel>{__('Name')}</FormLabel>
                                    <TextForm
                                        name={'name'}
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        error={errors.name}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>{__('Email')}</FormLabel>
                                    <TextForm
                                        name={'email'}
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        error={errors.email}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>{__('Password')}</FormLabel>
                                    <PasswordForm
                                        name={'password'}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        error={errors.password}
                                        placeholder={__('Leave blank if you don\'t want to change password')}
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
                                            href={data.referer}
                                        >
                                            {__('Cancel')}
                                        </Button.Light>
                                        <Button
                                            type="submit"
                                        >
                                            {__('Update')}
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
    )
}

Edit.layout = (page) => <Master>{page}</Master>;