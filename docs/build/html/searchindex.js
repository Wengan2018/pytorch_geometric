Search.setIndex({docnames:["index","modules/data","modules/datasets","modules/nn","modules/transforms","modules/utils","notes/create_dataset","notes/create_gnn","notes/installation","notes/introduction"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["index.rst","modules/data.rst","modules/datasets.rst","modules/nn.rst","modules/transforms.rst","modules/utils.rst","notes/create_dataset.rst","notes/create_gnn.rst","notes/installation.rst","notes/introduction.rst"],objects:{"torch_geometric.data":{Batch:[1,1,1,""],Data:[1,1,1,""],DataListLoader:[1,1,1,""],DataLoader:[1,1,1,""],Dataset:[1,1,1,""],DenseDataLoader:[1,1,1,""],InMemoryDataset:[1,1,1,""],download_url:[1,5,1,""],extract_bz2:[1,5,1,""],extract_gz:[1,5,1,""],extract_tar:[1,5,1,""],extract_zip:[1,5,1,""]},"torch_geometric.data.Batch":{from_data_list:[1,2,1,""],num_graphs:[1,3,1,""]},"torch_geometric.data.Data":{__call__:[1,4,1,""],__cat_dim__:[1,4,1,""],__contains__:[1,4,1,""],__cumsum__:[1,4,1,""],__getitem__:[1,4,1,""],__iter__:[1,4,1,""],__len__:[1,4,1,""],__setitem__:[1,4,1,""],apply:[1,4,1,""],clone:[1,4,1,""],contains_isolated_nodes:[1,4,1,""],contains_self_loops:[1,4,1,""],contiguous:[1,4,1,""],from_dict:[1,2,1,""],is_coalesced:[1,4,1,""],is_directed:[1,4,1,""],is_undirected:[1,4,1,""],keys:[1,3,1,""],num_edges:[1,3,1,""],num_faces:[1,3,1,""],num_features:[1,3,1,""],num_nodes:[1,3,1,""],to:[1,4,1,""]},"torch_geometric.data.Dataset":{__getitem__:[1,4,1,""],__len__:[1,4,1,""],download:[1,4,1,""],get:[1,4,1,""],num_features:[1,3,1,""],process:[1,4,1,""],processed_file_names:[1,3,1,""],processed_paths:[1,3,1,""],raw_file_names:[1,3,1,""],raw_paths:[1,3,1,""]},"torch_geometric.data.InMemoryDataset":{__getitem__:[1,4,1,""],__indexing__:[1,4,1,""],__len__:[1,4,1,""],collate:[1,4,1,""],download:[1,4,1,""],get:[1,4,1,""],num_classes:[1,3,1,""],process:[1,4,1,""],processed_file_names:[1,3,1,""],raw_file_names:[1,3,1,""],shuffle:[1,4,1,""]},"torch_geometric.datasets":{Amazon:[2,1,1,""],BitcoinOTC:[2,1,1,""],CoMA:[2,1,1,""],Coauthor:[2,1,1,""],CoraFull:[2,1,1,""],Entities:[2,1,1,""],FAUST:[2,1,1,""],GDELT:[2,1,1,""],GeometricShapes:[2,1,1,""],ICEWS18:[2,1,1,""],KarateClub:[2,1,1,""],MNISTSuperpixels:[2,1,1,""],ModelNet:[2,1,1,""],PCPNetDataset:[2,1,1,""],PPI:[2,1,1,""],Planetoid:[2,1,1,""],QM7b:[2,1,1,""],QM9:[2,1,1,""],ShapeNet:[2,1,1,""],TUDataset:[2,1,1,""]},"torch_geometric.nn":{conv:[3,0,0,"-"],data_parallel:[3,0,0,"-"],glob:[3,0,0,"-"],meta:[3,0,0,"-"],models:[3,0,0,"-"],pool:[3,0,0,"-"],unpool:[3,0,0,"-"]},"torch_geometric.nn.conv":{AGNNConv:[3,1,1,""],APPNP:[3,1,1,""],ARMAConv:[3,1,1,""],ChebConv:[3,1,1,""],DNAConv:[3,1,1,""],EdgeConv:[3,1,1,""],GATConv:[3,1,1,""],GCNConv:[3,1,1,""],GINConv:[3,1,1,""],GMMConv:[3,1,1,""],GatedGraphConv:[3,1,1,""],GraphConv:[3,1,1,""],NNConv:[3,1,1,""],PointConv:[3,1,1,""],RGCNConv:[3,1,1,""],SAGEConv:[3,1,1,""],SGConv:[3,1,1,""],SignedConv:[3,1,1,""],SplineConv:[3,1,1,""],XConv:[3,1,1,""],message_passing:[3,0,0,"-"]},"torch_geometric.nn.conv.AGNNConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.APPNP":{forward:[3,4,1,""]},"torch_geometric.nn.conv.ARMAConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.ChebConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.DNAConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.EdgeConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GATConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GCNConv":{forward:[3,4,1,""],norm:[3,2,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GINConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GMMConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GatedGraphConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.GraphConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.NNConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.PointConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.RGCNConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.SAGEConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.SGConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.SignedConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.SplineConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.XConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.conv.message_passing":{MessagePassing:[3,1,1,""]},"torch_geometric.nn.conv.message_passing.MessagePassing":{message:[3,4,1,""],propagate:[3,4,1,""],update:[3,4,1,""]},"torch_geometric.nn.data_parallel":{DataParallel:[3,1,1,""]},"torch_geometric.nn.data_parallel.DataParallel":{forward:[3,4,1,""],scatter:[3,4,1,""]},"torch_geometric.nn.dense":{dense_sage_conv:[3,0,0,"-"],diff_pool:[3,0,0,"-"]},"torch_geometric.nn.dense.dense_sage_conv":{DenseSAGEConv:[3,1,1,""]},"torch_geometric.nn.dense.dense_sage_conv.DenseSAGEConv":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.dense.diff_pool":{dense_diff_pool:[3,5,1,""]},"torch_geometric.nn.glob":{GlobalAttention:[3,1,1,""],Set2Set:[3,1,1,""],global_add_pool:[3,5,1,""],global_max_pool:[3,5,1,""],global_mean_pool:[3,5,1,""],global_sort_pool:[3,5,1,""]},"torch_geometric.nn.glob.GlobalAttention":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.glob.Set2Set":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.meta":{MetaLayer:[3,1,1,""]},"torch_geometric.nn.meta.MetaLayer":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.models":{ARGA:[3,1,1,""],ARGVA:[3,1,1,""],DeepGraphInfomax:[3,1,1,""],GAE:[3,1,1,""],InnerProductDecoder:[3,1,1,""],JumpingKnowledge:[3,1,1,""],RENet:[3,1,1,""],SignedGCN:[3,1,1,""],VGAE:[3,1,1,""]},"torch_geometric.nn.models.ARGA":{discriminator_loss:[3,4,1,""],reg_loss:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.models.ARGVA":{encode:[3,4,1,""],kl_loss:[3,4,1,""],reparametrize:[3,4,1,""]},"torch_geometric.nn.models.DeepGraphInfomax":{discriminate:[3,4,1,""],forward:[3,4,1,""],loss:[3,4,1,""],reset_parameters:[3,4,1,""],test:[3,4,1,""]},"torch_geometric.nn.models.GAE":{decode:[3,4,1,""],encode:[3,4,1,""],recon_loss:[3,4,1,""],reset_parameters:[3,4,1,""],split_edges:[3,4,1,""],test:[3,4,1,""]},"torch_geometric.nn.models.InnerProductDecoder":{forward:[3,4,1,""],forward_all:[3,4,1,""]},"torch_geometric.nn.models.JumpingKnowledge":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.models.RENet":{forward:[3,4,1,""],pre_transform:[3,2,1,""],reset_parameters:[3,4,1,""],test:[3,4,1,""]},"torch_geometric.nn.models.SignedGCN":{create_spectral_features:[3,4,1,""],discriminate:[3,4,1,""],forward:[3,4,1,""],loss:[3,4,1,""],neg_embedding_loss:[3,4,1,""],nll_loss:[3,4,1,""],pos_embedding_loss:[3,4,1,""],reset_parameters:[3,4,1,""],split_edges:[3,4,1,""],test:[3,4,1,""]},"torch_geometric.nn.models.VGAE":{encode:[3,4,1,""],kl_loss:[3,4,1,""],reparametrize:[3,4,1,""]},"torch_geometric.nn.pool":{TopKPooling:[3,1,1,""],avg_pool:[3,5,1,""],avg_pool_x:[3,5,1,""],fps:[3,5,1,""],graclus:[3,5,1,""],knn:[3,5,1,""],knn_graph:[3,5,1,""],max_pool:[3,5,1,""],max_pool_x:[3,5,1,""],nearest:[3,5,1,""],radius:[3,5,1,""],radius_graph:[3,5,1,""],voxel_grid:[3,5,1,""]},"torch_geometric.nn.pool.TopKPooling":{forward:[3,4,1,""],reset_parameters:[3,4,1,""]},"torch_geometric.nn.unpool":{knn_interpolate:[3,5,1,""]},"torch_geometric.transforms":{AddSelfLoops:[4,1,1,""],Cartesian:[4,1,1,""],Center:[4,1,1,""],Compose:[4,1,1,""],Constant:[4,1,1,""],Distance:[4,1,1,""],FaceToEdge:[4,1,1,""],GenerateMeshNormals:[4,1,1,""],KNNGraph:[4,1,1,""],LineGraph:[4,1,1,""],LinearTransformation:[4,1,1,""],LocalCartesian:[4,1,1,""],LocalDegreeProfile:[4,1,1,""],NormalizeFeatures:[4,1,1,""],NormalizeRotation:[4,1,1,""],NormalizeScale:[4,1,1,""],OneHotDegree:[4,1,1,""],Polar:[4,1,1,""],RadiusGraph:[4,1,1,""],RandomFlip:[4,1,1,""],RandomRotate:[4,1,1,""],RandomScale:[4,1,1,""],RandomShear:[4,1,1,""],RandomTranslate:[4,1,1,""],SamplePoints:[4,1,1,""],Spherical:[4,1,1,""],TargetIndegree:[4,1,1,""],ToDense:[4,1,1,""],TwoHop:[4,1,1,""]},"torch_geometric.utils":{accuracy:[5,5,1,""],add_self_loops:[5,5,1,""],contains_isolated_nodes:[5,5,1,""],contains_self_loops:[5,5,1,""],degree:[5,5,1,""],dense_to_sparse:[5,5,1,""],dropout_adj:[5,5,1,""],f1_score:[5,5,1,""],false_negative:[5,5,1,""],false_positive:[5,5,1,""],grid:[5,5,1,""],is_undirected:[5,5,1,""],normalized_cut:[5,5,1,""],one_hot:[5,5,1,""],precision:[5,5,1,""],recall:[5,5,1,""],remove_self_loops:[5,5,1,""],scatter_:[5,5,1,""],softmax:[5,5,1,""],sparse_to_dense:[5,5,1,""],to_dense_batch:[5,5,1,""],to_networkx:[5,5,1,""],to_scipy_sparse_matrix:[5,5,1,""],to_undirected:[5,5,1,""],true_negative:[5,5,1,""],true_positive:[5,5,1,""]},torch_geometric:{data:[1,0,0,"-"],datasets:[2,0,0,"-"],transforms:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:attribute","4":"py:method","5":"py:function"},terms:{"100k":2,"25a":8,"25b":8,"abstract":6,"boolean":[1,2],"byte":9,"case":[1,3,6,8],"class":[1,2,3,4,5,6,9],"default":[1,2,3,4,5,6,9],"final":[1,2,3,6,7,9],"float":[3,4,5,9],"function":[1,2,3,6,7,8,9],"import":[3,6,7,8,9],"int":[1,2,3,4,5],"long":[1,3,7,9],"new":[1,4,7,9],"return":[1,2,3,4,5,6,7,8,9],"short":9,"static":[1,3],"super":[3,6,7,9],"true":[1,2,3,4,5,8,9],"try":9,"while":[],BGS:2,For:[2,3,4,6,7,9],NOT:9,One:3,That:[7,9],The:[1,2,3,4,5,6,8,9],There:9,These:8,Use:6,Using:2,With:[1,7],__and_:8,__call__:1,__cat_dim__:1,__contains__:1,__cudapopcallconfigur:8,__cumsum__:1,__getitem__:[1,6],__indexing__:1,__init__:[3,6,7,9],__iter__:1,__len__:[1,6],__setitem__:1,__version__:8,_cuda:8,_download:6,_element:8,_process:6,_uelement:8,_zn2at6detail20dynamiccudainterface10set_device:8,_zn3c105errorc1ens_14sourcelocationerkss:8,abi:8,about:[2,8,9],acc:9,acceler:7,access:[1,2,6,8,9],accompani:[1,3],accord:[1,2,3,4,5,6],account:9,accuraci:[5,9],achiev:9,across:[3,8],act:3,activ:[2,9],activi:3,actual:[7,8],adam:9,adapt:3,add:[3,4,5,7,8],add_loop:3,add_self_loop:[5,7],adding:3,addit:[0,1,2,3,5,6,7,9],addition:[1,4,8],addselfloop:4,adj:3,adjac:[1,3,4,5,7,9],advanc:[3,8],adversari:3,after:9,afterward:[],against:[3,9],aggr:[3,7],aggr_out:[3,7],aggreg:[3,5,7],agnnconv:3,aifb:2,airplan:[2,9],algoithm:3,algorithm:3,all:[1,2,3,4,5,6,7,8,9],allow:[3,9],along:[4,5],alpha:3,alpha_:3,alpha_v:3,alreadi:[6,9],also:[0,1,4,7,8],although:[6,9],alwai:4,amazon:2,anaconda:8,analog:[3,7],angl:[3,4],ani:[1,3,7,8,9],annot:[2,8],anoth:9,anyth:1,anytim:9,append:[3,4,7],appl:8,appli:[1,3,4,5,6,9],applic:3,appnp:3,approach:3,approxim:3,arbitrari:[0,1,9],architectur:[3,7],archiv:1,area:[2,3,4],arg:3,arga:3,argument:[3,7,9],argva:3,arma:3,armaconv:3,around:4,assign:[1,3,5,7,9],assign_index:3,assum:7,atom:2,attent:3,attribut:[1,4,5,9],auc:3,augment:[6,9],author:2,auto:3,autoencod:[2,3],automat:[1,3,4,5,7,9],auxiliari:3,avail:6,averag:[3,9],avg_pool:3,avg_pool_x:3,axes:4,axi:4,b_x:3,b_y:3,backward:[3,9],bag:2,balanc:3,base:[0,1,3,4,8],baselin:4,basi:3,batch:[0,1,3,5,7],batch_i:3,batch_siz:[1,3,6,9],batch_x:3,becaus:[6,8],befor:[1,2,3,6,7,8,9],beforehand:3,begin:[4,9],behavior:1,being:[1,2,3,4,6,9],below:[7,8],benchmark:[0,2],bernoulli:5,besid:9,best:6,beta:3,between:[3,8,9],bia:3,bias:3,big:[1,6],bin:8,binari:[2,3],bipartit:[3,7],bitcoin:2,bitcoinotc:2,block:[7,9],blog:9,bmatrix:[4,9],bodi:6,bool:[1,2,3,4,5],both:[0,5,7,9],bought:2,brief:6,brows:9,buffer:3,build:[3,7,8],bytetensor:[1,3],cach:[3,8],cad:2,calcul:3,call:[3,7,8,9],callabl:[1,2,3],can:[1,3,6,7,8,9],cannot:8,cap:[2,4],captur:2,car:2,care:[7,9],cartesian:4,cat:[3,4,7],categori:[2,9],ccompil:8,cdot:[3,5,7,9],center:4,chain:9,chair:2,channel:3,chebconv:3,chebyshev:3,check:8,chemistri:[2,3],citat:[2,9],cites:[2,9],clang:8,clang_osx:8,clangxx_osx:8,classfic:3,classic:3,classif:[3,4,9],classifi:3,clean:[7,8,9],clear:8,clone:1,close:[3,6],cloud:[0,2,3,7,9],club:2,cluster:[3,8],cmd:8,cnn:[2,3],coalesc:4,coarsen:3,coauthor:2,code:6,coeffici:3,col:[3,4,7],collat:[1,6],collect:[2,8],colon:3,column:9,coma:2,come:[7,8,9],command:8,common:[0,8],compil:8,complain:8,complet:[1,2,9],compos:[4,9],composit:9,compress:1,comput:[2,3,4,5,7],concat:[3,4],concaten:[1,3,6,9],concept:[6,9],conda:8,condit:3,conflict:2,conform:2,connect:[1,2,3,9],consist:[0,2,8,9],consol:1,constant:4,construct:[1,3,7],constructor:[6,9],contain:[1,2,3,4,5,6,7,9],contains_isolated_nod:[1,5,9],contains_self_loop:[1,5,9],content:1,contigu:[1,9],continu:[2,3,6],contrast:[3,4],contribut:[3,5],conv1:9,conv2:9,conv:[3,7,8],convent:6,convers:1,convert:[2,4,5,9],convolut:[2,9],convolv:3,coo:[1,9],coordin:[3,4],copi:3,cora:[2,9],coraful:2,core:[8,9],correct:[1,5,9],correctli:8,correspond:4,corrupt:[1,3],cos:3,covari:3,cpath:8,cpu:[8,9],crash:8,creat:[0,1,3,4,5,8,9],create_spectral_featur:3,creation:2,crisi:2,cross:3,cube:2,cuda:[3,4,9],cumul:1,cup:[3,7],current:3,curv:3,curvatur:2,cut:[3,5],cxx:8,d_glibcxx_use_cxx11_abi:8,data:[0,2,3,4,5,6,7],data_1:6,data_2:6,data_:6,data_list:[1,3,6],databas:2,datalistload:[1,3],dataload:[1,6,9],dataparallel:1,dataset:[0,1,3],ddot:9,decod:3,decode_indic:[],decomposit:3,deep:[0,2,3,7],deepgraphinfomax:3,def:[3,6,7,8,9],defin:[3,4,5,7,9],deg:[4,5,7],deg_inv_sqrt:7,degre:[3,4,5,7],denot:[3,7,9],dens:[1,2,3,4,5],dense_diff_pool:3,dense_to_spars:5,densedataload:1,densesageconv:3,descend:3,describ:[3,7,9],desir:5,dest:3,detail:3,determin:3,devic:[1,3,5,9],device_id:3,diagon:[3,9],dicconnect:1,dictionari:[1,6],differ:[2,3,7,9],differenti:[3,7],dilat:3,dim:[3,7,9],dim_siz:[3,5],dimens:[1,3,4,5,7,9],dimension:[3,4,5],dir:8,direct:[1,3,4,7,9],directori:[1,2,8,9],discrimin:3,discriminator_loss:3,disk:[1,2,6,9],distanc:[3,4],distant:3,distribut:[5,9],distutil:8,divid:7,dnaconv:3,docker:8,document:[2,9],doe:[1,3,5,8],doing:9,domain:7,done:[6,7],dortmund:[2,9],dot:3,downgrad:8,download:[1,6,8,9],download_url:1,downstream:3,drop:[3,5],dropout:[3,5,9],dropout_adj:5,dry_run:8,dtype:[1,3,5,7,9],dump:8,duplic:1,dure:3,dyld_library_path:8,dynam:[2,3,6,7],dynamicedgeconv:7,e_1:4,e_2:4,each:[1,2,3,4,5,6,7,9],earli:[2,9],earphon:2,easi:0,easiest:9,easili:7,echo:8,edg:[1,2,3,4,5,9],edge_attr:[1,3,5,9],edge_index:[1,3,4,5,7,9],edge_indic:[],edge_mlp:3,edge_model:3,edge_norm:3,edge_typ:3,edge_weight:3,edge_window_s:2,edgeconv:[3,7],effect:4,eigenvector:[3,4],either:[3,5,7],element:[3,4,5],ell_2:3,els:[3,9],embed:[2,3,7],emptyset:4,encod:[3,4],end:[3,4,9],energi:2,ensur:[1,8],entiti:[2,3],entri:[1,3,5,7],entropi:3,environ:8,enzym:9,epoch:[1,9],eps:3,epsilon:3,equal:[3,4],equival:9,error:8,euclidean:4,eval:9,evalu:[2,3,9],even:[8,9],event:[2,3],eventdataset:3,everi:[1,2,5],evolv:2,evolvegcn:2,exactli:9,exampl:[0,1,3,5,6,8],exchang:7,execut:[3,6,8],exist:[1,2,3,4],exit:8,exp:3,expect:[3,9],experi:9,explan:9,explicitli:[1,6],expos:3,express:[2,7],extend:[3,9],extens:0,extent:1,extract:[1,6],extract_bz2:1,extract_gz:1,extract_tar:1,extract_zip:1,extrem:2,f1_score:5,f_1:5,f_e:3,f_u:3,f_x:3,face:[1,2,4,9],facetoedg:[2,4],fact:[7,9],factor:[3,4],fail:8,fals:[1,2,3,4,5,7,9],false_neg:5,false_posit:5,faq:8,fashion:9,fast:3,faster:9,fault:8,faust:[2,9],featur:[1,2,3,4,5,7,9],field:2,fifth:[],file:[1,6,8,9],filepath:1,fill_valu:5,filter:[3,6],find:[1,3,6,9],first:[3,5,7,8,9],first_aggr:3,fission:2,fit:[1,6],fix:[2,3],fixabl:8,flag:4,flip:4,flow:[2,3,7],fly:[1,6],folder:[1,6],follow:[6,7,8,9],follow_batch:1,force_direct:4,force_undirect:[4,5],form:3,format:[1,5,6,8,9],former:[],formula:[3,7],forward:[3,7,9],forward_al:3,found:[3,4,6,8,9],four:[6,9],fps:3,frac:[3,4,5,7],framework:2,frequent:2,from:[0,1,2,3,4,5,6,7,8,9],from_data_list:1,from_dict:1,full:[2,7],func:[1,3],fundament:[6,9],further:[6,7],gae:3,gamma:7,gamma_:3,gatconv:3,gate:3,gate_nn:3,gatedgraphconv:3,gaussian:[2,3],gcc:8,gcn:9,gcnconv:[3,7,9],gdelt:2,gene:2,gener:[2,3,4,7,9],generatemeshnorm:4,geometr:[1,2,3,6,7,8,9],geometricshap:2,get:[1,3,4,6],gfortran_osx:8,ginconv:3,give:6,given:[1,2,3,4,5],global:[2,4],global_add_pool:3,global_max_pool:3,global_mean_pool:3,global_mlp:3,global_model:3,global_nn:3,global_sort_pool:3,globalattent:3,gmmconv:3,gnn:7,good:2,gpu:[1,3,7,8,9],graclu:3,gradient:3,granular:2,graph:[0,1,2,3,4,5,6,7],graphconv:3,graphkernel:9,graphsag:3,greater:4,greedi:3,grid:[3,5],ground:3,group:[2,3],gru:3,guess:1,guid:8,guitar:2,h_obj:3,h_obj_batch:3,h_obj_t:3,h_sub:3,h_sub_batch:3,h_sub_t:3,hack:9,hand:9,handl:3,happen:6,happi:9,has:[1,3,6,7,9],hat:3,have:[1,3,6,7,8,9],head:3,heavi:6,height:5,help:[0,6,7,8],here:[1,3,6,7,8,9],hidden:3,hidden_channel:3,hierarch:3,high:9,higher:3,highnois:2,histori:3,hit:3,hold:[1,2,3,4,5,6,7,9],hook:[],hop:[3,4],host:8,hot:[4,5],hour:2,how:[1,3,6],howev:[1,6],http:9,huge:6,human:2,icew:[2,3],icews18:2,identifi:[1,3,9],idx:[1,6],ignor:[],imag:[8,9],imdb:2,immunolog:2,implement:[3,6,8,9],importerror:8,improv:3,in_channel:[3,7],includ:[1,2,3,8],include_norm:4,independ:7,index:[0,1,3,4,5,9],indic:[1,2,3,4,5,6,7,9],individu:[3,6,9],induct:[2,3],infer:[1,4],inferr:3,infomax:3,inform:[2,3,7,9],inherit:[6,7,9],initi:[2,3,7,9],inmemorydataset:[1,6],inner:3,innerproductdecod:3,input:[3,9],insert:3,insid:7,inspir:3,instal:0,instanc:[7,9],instead:[2,3,4],integr:2,intend:3,interact:[2,3],interfac:[0,6,7],intern:[1,3,6,7],interpol:3,interpret:3,interv:[3,4],introduc:[3,8,9],introduct:[0,6],invalid:5,invari:[3,7],involv:6,irregular:[0,7],is_avail:[8,9],is_coalesc:1,is_construct:8,is_direct:[1,9],is_open_splin:3,is_undirect:[1,5,9],isol:[1,5],isomorph:3,issu:8,item:[1,9],iter:[1,3],its:[1,2,3,4,5,7,8,9],join:6,jump:3,jumpingknowledg:3,just:[3,6],karat:2,karateclub:2,keep:5,kei:[1,3,9],kernel:[2,3,8],kernel_s:3,keyword:2,kind:[3,7],kipf:7,kl_loss:3,knife:2,knn:3,knn_graph:[3,7],knn_interpol:3,knngraph:[4,9],knowledg:[2,3],known:[0,3],kwarg:[1,3,7],label:[2,5,9],lai:3,lamb:3,lamp:2,languag:2,laplacian:3,laptop:2,larg:[0,3,9],larger:3,last:3,latent:3,latter:[],layer:[2,9],layout:1,lbfg:3,lceil:3,lcudart:8,ld_library_path:8,ldot:[3,5],ldp:4,lead:9,leakyrelu:3,learn:[0,2,3],learnabl:3,least:8,leav:7,left:[3,5,7],leftarrow:3,leman:3,len:[6,9],length:3,leq:4,less:3,let:[6,7,9],level:[2,3,9],lib64:8,lib:8,librari:[0,8],lift:3,like:[2,9],limit:7,lin:[3,7],line:[4,8],linear:[3,7,9],linearli:7,lineartransform:4,linegraph:4,link:[2,3,4],linker:8,linux:8,list:[1,3,4,5,6,9],load:[1,2,6,9],loader:[0,1,6,9],local:[2,3,4,8],local_nn:3,localcartesian:4,localdegreeprofil:4,locat:[3,5],log:[1,3],log_softmax:9,logic:[6,7],logist:3,logit:3,logvar:3,longtensor:[1,3,5],look:[6,9],loop:[1,3,4,5,7],loss:[3,9],lot:[6,8],low:2,lownois:2,lstm:3,luckili:7,mac:8,machin:[2,8],macosx_deployment_target:8,magic:6,mai:[1,6,8,9],main:9,make:1,manifold:[2,3],manual:6,map:[1,2,7],mark:7,mask:[2,3],match:[3,8],mathbb:[3,5,7],mathbf:[3,4,5,7,9],mathcal:[3,4,5,7],mathemat:7,mathrm:[3,4,5,9],matric:[1,3,7,9],matrix:[1,3,4,5,7,9],matter:3,max:[1,3,4,5,7,9],max_:[3,4,7],max_degre:4,max_i:5,max_num_neighbor:[3,4],max_point:4,max_pool:3,max_pool_x:3,max_val:[3,5],max_valu:4,maxim:3,maximum:[3,4],mean:[3,4,5,7],mednois:2,meet:3,membership:7,memori:1,merg:1,mesh:[0,1,2,4,9],messag:[0,2,3],messagepass:3,meta:3,metalay:3,method:[0,1,3,6,7],metric:3,mid:4,min:4,mini:[0,1],miniconda:8,minim:5,minimum:3,minut:2,miss:8,mixtur:[2,3],mlp:[3,7],mnist:2,mnistsuperpixel:2,mode:[1,3],model:[1,2,9],modelnet10:[2,9],modelnet40:2,modelnet:2,modifi:3,modul:[0,3,8,9],molecul:2,molecular:2,moleculenet:2,more:[3,9],most:3,motif:2,motorbik:2,mrr:3,mug:2,multi:[1,2,3,5],multi_class:3,multicellular:2,multilevel:3,multipl:5,must:[3,6,8],mutag:2,mutal:3,mylay:3,myowndataset:6,n_1:[3,5],n_b:[3,5],n_i:[3,5],name:[1,2,3,5,7,8,9],nearest:[3,7,9],nedg:3,need:[1,3,4,6,7,8,9],neg:[3,5],neg_edge_index:3,neg_embedding_loss:3,neg_z:3,negative_slop:3,neighbor:[3,4,7,9],neighborhood:[3,4,7],neq:4,net:[3,9],network:[0,2,3,9],networkx:5,neural:[2,3,7,9],newli:8,next:9,nll_loss:[3,9],nnconv:3,nngraph:9,node:[1,2,3,4,5,7,9],node_mlp:3,node_mlp_1:3,node_mlp_2:3,node_model:3,noisi:2,noisyandvardens:2,non:[3,4,6,9],none:[1,2,3,4,5,6,7,9],nonois:2,norm:[1,3,4,7],normal:[1,2,3,4,5,7],normalized_cut:5,normalizefeatur:4,normalizerot:4,normalizescal:4,notat:9,note:[0,7,8,9],now:9,num:4,num_bas:3,num_class:[1,5,9],num_dimens:[1,9],num_edg:[1,4,9],num_edge_featur:[1,9],num_fac:[1,4,9],num_featur:[1,9],num_graph:[1,9],num_lay:3,num_nod:[1,3,4,5,7,9],num_node_featur:[1,9],num_rel:3,num_stack:3,number:[0,1,2,3,4,5,6,9],nvcc:8,obj:[2,3],object:[1,2,3,4,6,8,9],obtain:3,odot:3,offici:8,offlin:4,old:[1,4,9],omit:9,onc:6,one:[1,2,3,4,5,6,9],one_hot:5,onehotdegre:4,onli:[1,3,4,6,7,9],ontolog:2,open:8,oper:[3,5,7,9],ops:6,optim:9,option:[1,2,3,4,5,6,7,8],order:[1,3,6,8],origin:[3,4],osp:6,otc:2,other:[0,1,3,4,8],otherwis:[2,3],our:[7,9],out:[3,6,9],out_channel:[3,7],output:[3,4,5,7,9],output_devic:3,outsourc:8,over:[1,2,3,9],overal:3,overlai:3,overli:4,overrid:6,overridden:1,own:[0,7,8,9],packag:[0,8],pagerank:3,pair:3,pairwis:9,paper:[0,2,3,4],parallel:[3,9],param:[],paramet:[1,2,3,4,5,9],part:2,pass:[0,2,3,6,9],past:3,patch:3,path:[1,6,8],pcpnet:2,pcpnetdataset:2,per:[1,3,9],perform:[1,4,9],perm:9,permut:[3,7,9],person:3,phi:7,phi_:3,photo:2,physic:2,pick:3,pip:8,pistol:2,pitfal:2,place:7,plain:[1,9],planetoid:[2,9],pleas:8,point:[0,2,3,4,7,9],pointcnn:3,pointconv:3,pointnet:3,polar:4,pool:9,popular:7,portion:3,pos:[1,3,5,7,9],pos_edge_index:3,pos_embedding_loss:3,pos_i:3,pos_x:3,pos_z:3,pose:2,posit:[1,2,3,4,5,9],positv:3,post:9,pow:7,power:3,ppi:2,pre_filt:[1,2,6],pre_transform:[1,2,3,6,9],precis:[3,5],precomput:[3,6],pred:[5,9],predict:[2,3,5],present:[1,2],prevent:8,previou:8,previous:9,prime:[3,4],print:[1,8,9],probabilist:3,probabilti:3,probabl:[3,4,5],problem:8,proce:7,process:[1,3,6,7,9],processed_dir:[1,6],processed_file_nam:[1,6],processed_path:[1,6],processing_step:3,produc:3,product:[2,3],profil:4,project:3,propabl:5,propag:[3,7],propagation_matrix:[],properti:[2,3,6],protein:2,provid:[2,6,7,9],pseudo:[3,4],publicli:6,publish:0,pubm:[2,9],pyramid:2,python:[1,6,8,9],pytorch:[1,6,7,8,9],qm7:9,qm7b:2,qm9:[2,9],qquad:9,qualiti:3,quantum:[2,3],queri:3,radiu:3,radius_graph:3,radiusgraph:4,random:4,random_start:3,randomflip:4,randomli:[1,4,5,9],randomrot:4,randomscal:4,randomshear:4,randomtransl:[4,9],randperm:9,rang:[4,9],rank:[2,3],rare:8,rate:3,ratio:3,raw:[2,6,9],raw_dir:[1,6],raw_file_nam:[1,6],raw_path:[1,6],rceil:3,read:6,readout:3,real:6,realli:6,reason:[2,3],recal:5,receiv:9,recip:[],reciproc:[3,4],recogn:8,recommend:[1,8],recomput:7,recon_loss:3,reconstruct:[1,6],record:6,recurr:[2,3],recurs:3,reddit:2,refer:[0,5],reg_loss:3,regard:3,region:2,regist:[],registr:2,regress:[2,3],regular:[3,6],reinstal:8,rel:[3,4,7],relat:[2,3,9],relu:[3,7,9],remov:[4,5],remove_fac:4,remove_self_loop:5,renam:8,renet:3,reparametr:3,replac:[4,8],replic:[3,9],replica:3,repositori:8,repres:[2,3],represent:[2,3],request:1,requir:9,requires_grad:3,reset_paramet:3,reshuffl:1,respect:[1,2,3,7,8],rest:3,restrict:[1,6,9],result:[1,3,4,5],review:2,revisit:2,rgcnconv:3,right:[3,5,7],rnn:3,roc:3,rocket:2,root:[1,2,3,6,8,9],root_weight:3,rotat:4,row:[3,4,7],run:[3,8,9],runtim:8,sageconv:3,same:[1,3,4,5],sampl:[1,2,3,4,5],samplepoint:[2,4],save:[1,2,4,6,7,9],scalabl:2,scalar:1,scale:[3,4],scatter:[3,5,8,9],scatter_:5,scatter_mean:[3,9],scheme:[3,7],scipi:5,score:[3,5],second:[3,5],section:8,see:[1,3,6,8,9],segment:[2,3,8],self:[1,3,4,5,6,7,8,9],semi:[2,3,9],separ:4,seq:[3,7],seq_len:3,sequenc:[2,3,4],sequenti:[2,3,7],set2set:3,set:[1,2,3,4,5,7,8],setup:[6,8],sever:4,sgconv:3,shape:[1,2,3,4,7,9],shapenet:[2,9],share:[3,8],shared_weight:3,shear:4,shortli:9,should:[1,2,3,6,8,9],show:9,shown:7,shuffl:[1,9],sigma:3,sigma_m:3,sigmoid:3,sign:3,signal:8,signatur:2,signedconv:3,signedgcn:3,silent:[],simgpl:3,simpl:[0,4,7,9],simpli:[6,7,8],simplifi:[3,6],sinc:[2,3],singl:[1,2,3,6,9],size:[2,3,4,5,7,9],skateboard:2,skip:[1,3,6],slice:[1,6,9],slope:3,slow:6,small:[2,9],soft:3,softmax:[3,5,9],solv:8,solver:3,some:1,some_file_1:6,some_file_2:6,sort:3,sourc:[1,2,3,4,5,6,7,8,9],source_to_target:[3,7],space:[3,7],spars:[3,4,5,7,8,9],sparse_to_dens:5,spatial:2,spawn:8,specif:[1,3,4,5,6,8],specifi:5,spectral:3,sphere:2,spheric:4,spline:[3,8],splinecnn:3,splineconv:3,split:[2,3,6,7,9],split_edg:3,sqrt:7,squar:[3,4,7],square_:[3,7],src:[3,5],stack:3,stackoverflow:8,standard:9,start:[3,7],statu:8,std:[4,8],step:[2,7,8,9],stochast:3,stop:9,storag:1,store:[3,6],straightforward:[6,7,9],string:[1,2,3,5,8],structur:[0,3,9],studi:[2,9],style:3,sub:3,subclass:[],subject:[2,3],subprocess:8,subsect:8,success:8,sudo:8,sum:[1,3,4,7,9],sum_:[3,7],summari:3,summat:3,superpixel:2,supervis:[2,3,9],support:[1,8],surfac:2,symbol:8,symlink:8,symmetr:7,synthet:[2,6],system:[2,4,8],tabl:2,take:[1,2,3,6,7,9],tanh:3,tar:1,target:[1,2,3,4,5,7,9],target_to_sourc:[3,7],targetindegre:4,task:[2,3],teleport:3,tempor:[2,3],temporarili:8,tensor:[1,3,4,5,7,9],termin:8,test:[2,3,9],test_dataset:9,test_i:3,test_mask:[1,9],test_ratio:3,test_z:3,textrm:[3,4],than:[3,4],thei:[2,7],them:[3,4,6,9],therefor:[1,6],theta:[3,7],thi:[1,3,4,5,6,7,8,9],thread:8,three:[4,9],through:[2,9],thu:1,time:[2,3,5,7,9],timestamp:3,tissu:2,tmp:[7,9],to_dense_batch:5,to_networkx:5,to_scipy_sparse_matrix:5,to_undirect:5,todens:4,togeth:[2,3,4,9],tone:2,tool:8,top:[3,9],topkpool:3,torch:[1,3,5,6,7,8,9],torch_:8,torch_geometr:[0,6,7,9],torch_scatt:[3,9],torchvis:[6,9],total:2,toward:3,train:[2,3,5,9],train_dataset:9,train_ep:3,train_i:3,train_idx:1,train_mask:9,train_z:3,trainabl:3,transfer:9,transform:[0,1,2,3,6,7],translat:[4,9],transpos:9,treat:4,tri:3,triangl:9,triplet:3,true_neg:5,true_posit:5,trust:2,truth:3,tudataset:[2,9],tupl:[1,3,4,7,9],tutori:[1,3],twice:3,two:[2,3,4,5,6,7,9],twohop:4,type:[3,5,9],typic:[1,7],uint8:1,unabl:8,undefin:8,under:3,understand:9,undirect:[1,2,3,4,5,9],unexpect:1,uniformli:[3,4],union:3,univers:2,unmark:3,unsupervis:2,unsur:9,unweight:[2,5,9],updat:[3,7],upsampl:3,url:1,use:[0,1,2,3,5,6,7,9],use_node_attr:2,used:[1,2,3,4,6,7,9],useful:[3,6],user:[3,7,8],uses:3,using:[2,3,5,7,8,9],usr:8,usual:9,util:[0,7,9],val:[2,3],val_mask:9,val_ratio:3,valid:[2,3,9],valu:[1,2,3,4,5,8],vardens:2,vardensitygradi:2,vardensitystrip:2,vari:8,variabl:[3,7,8],variant:7,variat:3,varieti:[0,2],variou:[0,1,2,6,9],vdot:9,vector:[1,3,4,5,9],verbos:8,verifi:[7,8],version:[1,2,3,8],vert:[3,4],vertex:3,vgae:3,via:[1,2,3,6,8,9],view:7,volumetr:2,voxel:3,voxel_grid:3,w_m:3,wai:[7,9],wang:7,want:[6,9],warn:[1,2,8],watertight:2,weight:[3,5,7],weight_decai:9,weisfeil:3,well:[0,3,7],what:6,when:[1,6],where:[1,2,3,4,6,7,9],whether:[1,2,9],which:[1,3,4,5,6,7,8,9],who:2,whole:6,whom:2,width:5,window:2,wise:[1,3,7,9],wish:6,within:[3,4,9],without:[3,6],word:2,work:[1,3],would:3,write:9,x_1:3,x_col:7,x_i:[3,7],x_j:[3,7],x_k:3,x_row:7,xconv:3,xxx:8,yet:4,yield:1,you:[1,3,6,7,8,9],your:[0,1,8,9],yourself:6,zachari:2,zero:3,zero_grad:9,zip:1},titles:["PyTorch Geometric documentation","torch_geometric.data","torch_geometric.datasets","torch_geometric.nn","torch_geometric.transforms","torch_geometric.utils","Creating your own datasets","Creating message passing networks","Installation","Introduction by example"],titleterms:{"class":7,The:7,ask:[6,8],base:7,batch:9,benchmark:9,common:9,content:3,convolut:[3,7],creat:[6,7],cuda:8,data:[1,9],dataparallel:3,dataset:[2,6,9],document:0,edg:7,exampl:9,extens:8,frequent:[6,8],gcn:7,geometr:0,global:3,graph:9,handl:9,implement:7,indic:0,instal:8,introduct:9,larger:6,layer:[3,7],learn:9,maco:8,memori:6,messag:7,messagepass:7,method:9,mini:9,model:3,network:7,own:6,pass:7,pool:3,pytorch:0,question:[6,8],tabl:0,torch_geometr:[1,2,3,4,5],transform:[4,9],unpool:3,util:5,your:6}})