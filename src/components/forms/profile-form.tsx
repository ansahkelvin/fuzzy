'use client'

import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import z from 'zod';
import {EditUserProfileSchema} from "@/lib/types";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";


type Props = {
    user: any
    onUpdate: (name: string) => any
}

const ProfileForm = async({user, onUpdate}: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (values: z.infer<typeof EditUserProfileSchema>) => {
        setIsLoading(true)
        await onUpdate(values.name)
        setIsLoading(false)
    }

    useEffect(() => {
        form.reset({name: user.name, email: user.email})
    }, [user])

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: "onChange",
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
        }
    })
    return (<Form {...form}>
        <form
            className="flex flex-col gap-6"
            onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
                disabled={isLoading}
                control={form.control}
                name="name"
                render={(({field}) => (
                        <FormItem>
                            <FormLabel className="text-lg">
                                User full name
                            </FormLabel>
                            <FormControl>
                                <Input
                                       {...field}
                                       placeholder={"Name"} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )
                )}/>
            <FormField
                name="email"
                control={form.control}
                render={(({field}) => (
                    <FormItem>
                        <FormLabel className="text-lg">User email</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                disabled={true}
                                type="email"
                                placeholder="Email" />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                ))}
            />

            <Button
                type={"submit"}
                className={"self-start hover:text-white hover:bg-[#2F006B]"}
            >
                {isLoading ? (
                    <>
                    <Loader2 className={"animate-spin mr-3 h-4 w-4"}>
                        Saving
                </Loader2>
                    </>) : ('Save User Settings')}

            </Button>

        </form>

    </Form>)
}


export default ProfileForm