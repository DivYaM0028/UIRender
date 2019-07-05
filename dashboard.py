from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import MySQLdb

####### SQL CONFIGURATIONS######

sql_file = open("sqlconfig_server.txt")

SQL_USER = sql_file.readline()[:-1].split(':')[1]
SQL_PASSWORD = sql_file.readline()[:-1].split(':')[1]
SQL_HOST = sql_file.readline()[:-1].split(':')[1]
sql_file.close()

######## Flask API ########
app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def index():
        final_ans={}
        conn = MySQLdb.connect(SQL_HOST, SQL_USER, SQL_PASSWORD, "SEH")
        conn.set_character_set('utf8')
        cur = conn.cursor()
        db_rows = cur.execute("SELECT COUNT(*) FROM theses_details")
        if db_rows!=0:
                final_ans["Thesis_Annotated"]=str(cur.fetchall()[0][0])
        else:
                final_ans["Theses_Annotated"]="0"

        db_rows = cur.execute("SELECT COUNT(*) FROM research_article")
        if db_rows!=0:
                final_ans["Research_Article_Found"]=str(cur.fetchall()[0][0])
        else:
                final_ans["Research_Article_Found"]=""

        db_rows = cur.execute("SELECT COUNT(*) FROM author_openreuse")
        if db_rows!=0:
                final_ans["Reuse_Recipe_Docs"]=str(cur.fetchall()[0][0])
        #else:
        final_ans["Reuse_Recipe_Docs"]="0"
        final_ans["Figures_and_Tables_From_Thesis"]="0"
        final_ans["Method_Matching"]="0"
        final_ans["Figures_and_Tables_From_Research_Article"]="0"
        #Figures_and_Tables_From_Research_Article ->
        # db_rows = cur.execute("")
        # if db_rows!=0:
        #         final_ans["Figures_and_Tables_From_Research_Article"]=str(cur.fetchall()[0][0])
        # else:
        #         final_ans["Figures_and_Tables_From_Research_Article"]="0"

        # #Figures_and_Tables_From_Theses ->
        # db_rows = cur.execute("")
        # if db_rows!=0:
        #         final_ans["Figures_and_Tables_From_Thesis"]=str(cur.fetchall()[0][0])
        # else:
        #         final_ans["Figures_and_Tables_From_Thesis"]="0"

        # #Method Matching ->
        # db_rows = cur.execute("")
        # if db_rows!=0:
        #         final_ans["Method_Matching"]=""
        # else:
        #         final_ans["Method_Matching"]="0"

        #Choose Error
        final_ans["Choose_Error"]=["Research Article : Method Titles ", "Research Article: Figure" , "Theses:Figure and Tables" , "Theses: Figure"]


        #Choose_Institue
        db_rows = cur.execute("SELECT DISTINCT(author_affiliation) FROM theses_details")
        if db_rows!=0:
                ans=[]
                institues=cur.fetchall()
                for institue in institues:
                        ans.append(institue[0])
                final_ans["Choose_Institute"]=ans
        else:
                final_ans["Choose_Institute"]=[]

        db_rows = cur.execute("SELECT * FROM theses_details limit 10")
        if db_rows!=0:
                x=cur.fetchall()
                ans=[]
                for i in x:
                        temp={}
                        temp["Thesis_Title"] = i[3]
                        temp["Institute"] = i[2]
                        temp["Research_Article"]=[{"DOI":"10.7554/eLife.46149","DOI_Title":"Article Title1"	}, {"DOI":"10.7554/eLife.46149","DOI_Title":"Article Title1"}]
                        temp["Reuse_Recipe_Doc"]=[{"URL":"URL", "URL_Title":"Created Date"}, {"URL":"URL", "URL_Title":"Created Date"}]
                        temp["Errors"]="Errors_Not_known"
                        ans.append(temp)
                final_ans["Thesis_Data"] = ans
        else:
                final_ans["Thesis_Data"] = []
        
        return jsonify(final_ans),201

if __name__ == '__main__':
    app.run(debug=True,port="3030")