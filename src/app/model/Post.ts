import { Theme } from "./Theme"
import { Theme } from "./Theme"
import { UserModel } from "./User"

export class Post{
    public id: number
    public title: string
    public text: string
    public date: Date
    public anonymous: boolean
    public picture: string
    public theme: Theme
    public user: UserModel

}
